import { RegisterUserCommand } from '../commands/register-user.command';
import { UserDTO } from '../dto/user.dto';
import { PasswordHasherPort } from '../ports/password-hasher.port';
import { UniqueEmailPort } from '../ports/unique-email.port';
import { UniqueUsernamePort } from '../ports/unique-username.port';
import { EventBusPort } from '../ports/event-bus.port';
import { UserRepositoryPort } from '../../domain/user.repository.port';
export declare class RegisterUserUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly uniqueEmail;
    private readonly uniqueUserName;
    private readonly eventBus;
    constructor(userRepository: UserRepositoryPort, passwordHasher: PasswordHasherPort, uniqueEmail: UniqueEmailPort, uniqueUserName: UniqueUsernamePort, eventBus: EventBusPort);
    execute(cmd: RegisterUserCommand): Promise<UserDTO>;
}
