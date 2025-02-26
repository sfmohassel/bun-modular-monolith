import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { ListNotFoundError, ListRepo, Task } from '@todo/core'
import { AddTaskInput, AddTaskOutput } from '../dto/add-task'

@Injectable()
export class AddTask extends BaseUseCase<AddTaskInput, AddTaskOutput> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: AddTaskInput): Promise<AddTaskOutput> {
    const list = await this.listRepo.findById(input.listId)
    if (!list) {
      throw new ListNotFoundError(input.listId)
    }

    const task = new Task({
      title: input.title,
      description: input.description,
    })

    list.addTask(task)
    await this.listRepo.update(list)

    return {
      taskId: task.id,
    }
  }
}
