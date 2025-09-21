import { DomainError } from './domain.error';

export class DomainValidationError extends Error {
  constructor(public readonly errors: DomainError[]) {
    super('DOMAIN_VALIDATION_FAILED');
  }
}
