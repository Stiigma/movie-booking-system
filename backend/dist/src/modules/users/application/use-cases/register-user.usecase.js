"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const uuid_1 = require("uuid");
const email_token_error_1 = require("../errrors/email-token.error");
const user_entity_1 = require("../../domain/entities/user.entity");
const user_registered_event_1 = require("../../domain/events/user-registered.event");
const domain_validation_error_1 = require("../../domain/errorrs/domain-validation.error");
const politics_1 = require("../../domain/policies/politics");
class RegisterUserUseCase {
    userRepository;
    passwordHasher;
    uniqueEmail;
    uniqueUserName;
    eventBus;
    constructor(userRepository, passwordHasher, uniqueEmail, uniqueUserName, eventBus) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.uniqueEmail = uniqueEmail;
        this.uniqueUserName = uniqueUserName;
        this.eventBus = eventBus;
    }
    async execute(cmd) {
        const userName = cmd.userName?.trim();
        const email = cmd.email?.trim().toLowerCase();
        const password = cmd.password?.trim();
        if (!userName || !email || !password) {
            throw new Error('Invalid input data');
        }
        try {
            politics_1.Politics.email.assert(email);
            politics_1.Politics.username.assert(userName);
            politics_1.Politics.password.assert(password);
        }
        catch (e) {
            if (e instanceof domain_validation_error_1.DomainValidationError) {
                throw e;
            }
            throw e;
        }
        if (!await this.uniqueEmail.isUnique(email)) {
            throw new email_token_error_1.EmailAlreadyInUseError();
        }
        if (!await this.uniqueUserName.isUnique(userName)) {
            throw new Error('Username is already taken');
        }
        const hash = await this.passwordHasher.hash(password);
        const entity = user_entity_1.User.Create({
            uuid: (0, uuid_1.v4)(),
            userName,
            email,
            password: hash,
        });
        const doWork = async () => {
            await this.userRepository.save(entity);
            await this.eventBus.publish(new user_registered_event_1.UserRegistered(entity.uuid, entity.userName, entity.email, entity.createdAt));
        };
        if (this.userRepository.withTransaction) {
            await this.userRepository.withTransaction(doWork);
        }
        else {
            await doWork();
        }
        return {
            uuid: entity.uuid,
            userName: entity.userName,
            email: entity.email,
            createdAt: entity.createdAt,
            state: entity.state,
        };
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=register-user.usecase.js.map