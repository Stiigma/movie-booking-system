"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistered = void 0;
class UserRegistered {
    uuid;
    userName;
    email;
    createdAt;
    constructor(uuid, userName, email, createdAt = new Date()) {
        this.uuid = uuid;
        this.userName = userName;
        this.email = email;
        this.createdAt = createdAt;
    }
}
exports.UserRegistered = UserRegistered;
//# sourceMappingURL=user-registered.event.js.map