import { RegisterUserUseCase } from "../../application/use-cases/register-user.usecase";
declare class RegisterUserDto {
    nombreUsuario: string;
    correo: string;
    contrasena: string;
}
export declare class UsersController {
    private readonly registerUser;
    constructor(registerUser: RegisterUserUseCase);
    register(dto: RegisterUserDto): Promise<import("../../application/dto/user.dto").UserDTO>;
}
export {};
