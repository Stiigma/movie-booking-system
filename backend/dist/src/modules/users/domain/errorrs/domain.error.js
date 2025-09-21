"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = void 0;
class DomainError extends Error {
    code;
    field;
    meta;
    constructor(code, field, message, meta) {
        super(message ?? code);
        this.code = code;
        this.field = field;
        this.meta = meta;
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=domain.error.js.map