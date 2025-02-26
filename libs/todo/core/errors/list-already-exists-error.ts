import { BaseError } from '@shared/kernel'

export class ListAlreadyExistsError extends BaseError {
  constructor(name: string) {
    super(`List with name ${name} already exists`, 401)
  }
}
