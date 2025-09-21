import { Module } from "@nestjs/common";
import { DataSource } from "typeorm";

import { UsersController } from "./interface/http/users.controller";
import { RegisterUserUseCase } from "./application/use-cases/register-user.usecase";

import { TypeOrmUserRepository } from "./infrastructure/persistence/user.repository.adaptar";
import { UniqueEmailPort } from "./application/ports/unique-email.port";
import { UniqueUsernamePort } from "./application/ports/unique-username.port";
import { PasswordHasherPort } from "./application/ports/password-hasher.port";


import { BcryptHasher } from "src/shared/bcrypt.hasher";
import { OutboxEventBusAdapter } from "./infrastructure/persistence/events/outbox.event-bus.adapter";
import { UniqueEmailAdapter } from "./infrastructure/persistence/services/unique-email.adapter";
import { UniqueUsernameAdapter } from "./infrastructure/persistence/services/unique-username.adapter";

@Module({
  controllers: [UsersController],
  providers: [
    { provide: 'UserRepositoryPort', useFactory: (ds: DataSource) => new TypeOrmUserRepository(ds), inject: [DataSource] },
    { provide: 'UniqueEmailPort',    useFactory: (ds: DataSource) => new UniqueEmailAdapter(ds),    inject: [DataSource] },
    { provide: 'UniqueUsernamePort', useFactory: (ds: DataSource) => new UniqueUsernameAdapter(ds), inject: [DataSource] },
    { provide: 'EventBusPort',       useClass: OutboxEventBusAdapter },
    { provide: 'PasswordHasherPort', useClass: BcryptHasher }, // o Argon2Hasher

    {
     provide: RegisterUserUseCase,
      useFactory: (users, hasher, uniqueEmail, uniqueUsername, events) =>
        new RegisterUserUseCase(users, hasher, uniqueEmail, uniqueUsername, events),
      inject: ['UserRepositoryPort', 'PasswordHasherPort', 'UniqueEmailPort', 'UniqueUsernamePort', 'EventBusPort'],
    },
  ],
})
export class UsersModule {}