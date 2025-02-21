import { BaseError } from '@shared/kernel'

export class UserNotFountError extends BaseError {
  constructor(email: string) {
    super(`User with email ${email} was not found`, 404)
  }
}
