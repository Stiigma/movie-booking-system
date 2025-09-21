"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    uuid;
    userName;
    email;
    password;
    state;
    createdAt;
    updatedAt;
    constructor(uuid, userName, email, password, state = 'PENDING_VERIFICATION', createdAt = new Date(), updatedAt = new Date()) {
        this.uuid = uuid;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static Create(props) {
        return new User(props.uuid, props.userName, props.email.toLowerCase(), props.password, 'PENDING_VERIFICATION', new Date(), new Date());
    }
    getPassword() {
        return this.password;
    }
    setPassword(newPassword) {
        this.password = newPassword;
        this.updatedAt = new Date();
    }
    getEmail() {
        return this.email;
    }
    setEmail(newEmail) {
        this.email = newEmail.toLowerCase();
        this.updatedAt = new Date();
    }
    getUserName() {
        return this.userName;
    }
    setUserName(newUserName) {
        this.userName = newUserName;
        this.updatedAt = new Date();
    }
    activate() {
        this.state = 'ACTIVE';
        this.updatedAt = new Date();
    }
    suspend() {
        this.state = 'SUSPENDED';
        this.updatedAt = new Date();
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map