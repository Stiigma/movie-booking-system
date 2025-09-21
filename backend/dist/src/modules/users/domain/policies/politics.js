"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politics = void 0;
const email_policy_1 = require("./email.policy");
const username_policy_1 = require("./username.policy");
const password_policy_1 = require("./password.policy");
exports.Politics = {
    email: email_policy_1.EmailPolicy,
    username: username_policy_1.UsernamePolicy,
    password: password_policy_1.PasswordPolicy,
};
//# sourceMappingURL=politics.js.map