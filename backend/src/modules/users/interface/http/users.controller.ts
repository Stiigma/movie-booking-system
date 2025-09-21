import { BadRequestException, ConflictException, Controller, Post, Body } from "@nestjs/common";
import { IsEmail, IsString, min, minLength, MinLength } from "class-validator";

import { RegisterUserUseCase } from "../../application/use-cases/register-user.usecase";
import { UserRegistered } from "../../domain/events/user-registered.event";
import { DomainValidationError } from "../../domain/errorrs/domain-validation.error";
import { RegisterUserCommand } from "../../application/commands/register-user.command";

class RegisterUserDto {
  @IsString() @MinLength(3)
  nombreUsuario!: string;

  @IsEmail()
  correo!: string;

  @IsString() @MinLength(8)
  contrasena!: string;
}

@Controller('users')
export class UsersController {
    constructor(private readonly registerUser: RegisterUserUseCase) {}

    @Post('register')
    async register(@Body() dto: RegisterUserDto) {
        try {
            return await this.registerUser.execute(new RegisterUserCommand(
                dto.nombreUsuario,
                dto.correo,
                dto.contrasena,
            ));
        } catch (e) {
            if (e instanceof DomainValidationError) {
            throw new BadRequestException({ error: 'VALIDATION_FAILED', details: e.errors });
            }
            if (e?.message === 'EMAIL_TAKEN') {
                throw new ConflictException({ error: 'EMAIL_TAKEN' });
            }
            // fallback (por si la DB lanza unique_violation)
            if (e?.code === '23505') {
                throw new ConflictException({ error: 'EMAIL_TAKEN' });
            }
            throw e;
        }
    }
}