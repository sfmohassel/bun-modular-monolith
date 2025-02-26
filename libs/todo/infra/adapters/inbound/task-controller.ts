import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common'
import { AddTask, AddTaskInput, CompleteTask, DeleteTask } from '@todo/app'

@Controller('lists/:listId/tasks')
export class TaskController {
  constructor(
    private readonly addTask: AddTask,
    private readonly completeTask: CompleteTask,
    private readonly deleteTask: DeleteTask,
  ) {}

  @Post()
  async add(
    @Param('listId') listId: string,
    @Body() input: Omit<AddTaskInput, 'listId'>,
  ) {
    return this.addTask.execute({ ...input, listId })
  }

  @Patch()
  async complete(
    @Param('listId') listId: string,
    @Param('taskId') taskId: string,
  ) {
    return this.completeTask.execute({ listId, taskId })
  }

  @Delete(':taskId')
  async delete(
    @Param('listId') listId: string,
    @Param('taskId') taskId: string,
  ) {
    this.deleteTask.execute({ listId, taskId })
  }
}
