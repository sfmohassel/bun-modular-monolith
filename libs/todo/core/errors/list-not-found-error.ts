import { BaseError } from '@shared/kernel'

export class ListNotFoundError extends BaseError {
  constructor(id: string) {
    super(`List with id ${id} not found.`, 404)
  }
}
