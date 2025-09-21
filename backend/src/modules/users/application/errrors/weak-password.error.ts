export class WeakPasswordError extends Error {
  constructor(public readonly reason = 'Password does not meet policy') {
    super('WEAK_PASSWORD');
  }
}
