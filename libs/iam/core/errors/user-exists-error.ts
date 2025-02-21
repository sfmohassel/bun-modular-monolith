import { BaseError } from '@shared/kernel'

export class UserExistsError extends BaseError {
  constructor(email: string) {
    super(`User with email ${email} already exists`, 401)
  }
}
