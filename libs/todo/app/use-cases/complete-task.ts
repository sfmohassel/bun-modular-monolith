import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { ListNotFoundError, ListRepo } from '@todo/core'
import { CompleteTaskInput } from '../dto/complete-task'

@Injectable()
export class CompleteTask extends BaseUseCase<CompleteTaskInput, void> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: CompleteTaskInput): Promise<void> {
    const list = await this.listRepo.findById(input.listId)
    if (!list) {
      throw new ListNotFoundError(input.listId)
    }

    list.completeTask(input.taskId)
    await this.listRepo.update(list)
  }
}
