"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const users_controller_1 = require("./interface/http/users.controller");
const register_user_usecase_1 = require("./application/use-cases/register-user.usecase");
const user_repository_adaptar_1 = require("./infrastructure/persistence/user.repository.adaptar");
const bcrypt_hasher_1 = require("../../shared/bcrypt.hasher");
const outbox_event_bus_adapter_1 = require("./infrastructure/persistence/events/outbox.event-bus.adapter");
const unique_email_adapter_1 = require("./infrastructure/persistence/services/unique-email.adapter");
const unique_username_adapter_1 = require("./infrastructure/persistence/services/unique-username.adapter");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            { provide: 'UserRepositoryPort', useFactory: (ds) => new user_repository_adaptar_1.TypeOrmUserRepository(ds), inject: [typeorm_1.DataSource] },
            { provide: 'UniqueEmailPort', useFactory: (ds) => new unique_email_adapter_1.UniqueEmailAdapter(ds), inject: [typeorm_1.DataSource] },
            { provide: 'UniqueUsernamePort', useFactory: (ds) => new unique_username_adapter_1.UniqueUsernameAdapter(ds), inject: [typeorm_1.DataSource] },
            { provide: 'EventBusPort', useClass: outbox_event_bus_adapter_1.OutboxEventBusAdapter },
            { provide: 'PasswordHasherPort', useClass: bcrypt_hasher_1.BcryptHasher },
            {
                provide: register_user_usecase_1.RegisterUserUseCase,
                useFactory: (users, hasher, uniqueEmail, uniqueUsername, events) => new register_user_usecase_1.RegisterUserUseCase(users, hasher, uniqueEmail, uniqueUsername, events),
                inject: ['UserRepositoryPort', 'PasswordHasherPort', 'UniqueEmailPort', 'UniqueUsernamePort', 'EventBusPort'],
            },
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map