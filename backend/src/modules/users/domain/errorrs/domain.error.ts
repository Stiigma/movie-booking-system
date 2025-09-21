export abstract class DomainError extends Error {
  constructor(
    public readonly code: string,         // p.ej. 'EMAIL_EMPTY'
    public readonly field: string,        // p.ej. 'correo'
    message?: string,
    public readonly meta?: Record<string, unknown>, // extras (max, min, pattern, etc.)
  ) {
    super(message ?? code);
  }
}
