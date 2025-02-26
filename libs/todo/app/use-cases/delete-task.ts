import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { ListNotFoundError, ListRepo } from '@todo/core'
import { DeleteTaskInput } from '../dto/delete-task'

@Injectable()
export class DeleteTask extends BaseUseCase<DeleteTaskInput, void> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: DeleteTaskInput): Promise<void> {
    const list = await this.listRepo.findById(input.listId)
    if (!list) {
      throw new ListNotFoundError(input.listId)
    }

    list.deleteTask(input.taskId)
    await this.listRepo.update(list)
  }
}
