"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const register_user_usecase_1 = require("../../application/use-cases/register-user.usecase");
const domain_validation_error_1 = require("../../domain/errorrs/domain-validation.error");
const register_user_command_1 = require("../../application/commands/register-user.command");
class RegisterUserDto {
    nombreUsuario;
    correo;
    contrasena;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "nombreUsuario", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], RegisterUserDto.prototype, "contrasena", void 0);
let UsersController = class UsersController {
    registerUser;
    constructor(registerUser) {
        this.registerUser = registerUser;
    }
    async register(dto) {
        try {
            return await this.registerUser.execute(new register_user_command_1.RegisterUserCommand(dto.nombreUsuario, dto.correo, dto.contrasena));
        }
        catch (e) {
            if (e instanceof domain_validation_error_1.DomainValidationError) {
                throw new common_1.BadRequestException({ error: 'VALIDATION_FAILED', details: e.errors });
            }
            if (e?.message === 'EMAIL_TAKEN') {
                throw new common_1.ConflictException({ error: 'EMAIL_TAKEN' });
            }
            if (e?.code === '23505') {
                throw new common_1.ConflictException({ error: 'EMAIL_TAKEN' });
            }
            throw e;
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [register_user_usecase_1.RegisterUserUseCase])
], UsersController);
//# sourceMappingURL=users.controller.js.map