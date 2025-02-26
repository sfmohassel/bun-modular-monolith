import { BaseError } from '@shared/kernel'

export class TaskNotFoundError extends BaseError {
  constructor(id: string) {
    super(`Task with id ${id} not found.`, 404)
  }
}
