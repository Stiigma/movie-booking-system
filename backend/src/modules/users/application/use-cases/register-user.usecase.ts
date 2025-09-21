import { v4 as uuid } from 'uuid';
import { RegisterUserCommand } from '../commands/register-user.command';
import { UserDTO } from '../dto/user.dto';
import { PasswordHasherPort } from '../ports/password-hasher.port';
import { UniqueEmailPort } from '../ports/unique-email.port';
import { UniqueUsernamePort } from '../ports/unique-username.port';
import { EventBusPort } from '../ports/event-bus.port';

import { EmailAlreadyInUseError, EmailPolicyError, EmailTokenError } from '../errrors/email-token.error';
import { WeakPasswordError } from '../errrors/weak-password.error';

import { User } from '../../domain/entities/user.entity';
import { UserRepositoryPort } from '../../domain/user.repository.port';
import { UserRegistered } from '../../domain/events/user-registered.event';

import { DomainValidationError } from '../../domain/errorrs/domain-validation.error';
import { Politics } from '../../domain/policies/politics';

export class RegisterUserUseCase {
    constructor(
        private readonly userRepository: UserRepositoryPort,
        private readonly passwordHasher: PasswordHasherPort,
        private readonly uniqueEmail: UniqueEmailPort,
        private readonly uniqueUserName: UniqueUsernamePort,
        private readonly eventBus: EventBusPort,
    ) {}

    async execute(cmd: RegisterUserCommand): Promise<UserDTO> {
        // 1) validation simple de "shape"/politica de aplicacion

        const userName = cmd.userName?.trim();
        const email = cmd.email?.trim().toLowerCase();
        const password = cmd.password?.trim();
        
        if (!userName || !email || !password) {
            throw new Error('Invalid input data');
        }

        // validate email against policy
        try {
            Politics.email.assert(email);
            Politics.username.assert(userName);
            Politics.password.assert(password);
        } catch (e) {
            if (e instanceof DomainValidationError) {
                throw e;
            }
            throw e;
        }


        // 2) business validation
        if(!await this.uniqueEmail.isUnique(email)){
            throw  new EmailAlreadyInUseError();
        }
        
        // check if username is unique
        if (!await this.uniqueUserName.isUnique(userName)) {
            throw new Error('Username is already taken');
        }

        // 3) all good, proceed to register user
        const hash = await this.passwordHasher.hash(password);

        const entity = User.Create({
            uuid: uuid(),
            userName,
            email,
            password: hash,
        });

        // persist user
        const doWork = async () => {
            await this.userRepository.save(entity);
            await this.eventBus.publish(new UserRegistered(entity.uuid, entity.userName, entity.email, entity.createdAt));
        };

        if (this.userRepository.withTransaction) {
            await this.userRepository.withTransaction(doWork);
        } else {
            await doWork();
        }

        // return user dto
        return {
            uuid: entity.uuid,
            userName: entity.userName,
            email: entity.email,
            createdAt: entity.createdAt,
            state: entity.state,
        };
    } 

}

