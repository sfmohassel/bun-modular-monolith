import { BaseModel } from '@shared/kernel'
import { TaskNotFoundError } from '../errors/task-not-found-error'
import { Task } from './task'

export class List extends BaseModel {
  ownerId: string
  name: string
  tasks: Task[]

  constructor(list: Pick<List, 'ownerId' | 'name'>) {
    super()
    this.ownerId = list.ownerId
    this.name = list.name
    this.tasks = []
  }

  addTask(task: Task): void {
    this.tasks.push(task)
  }

  completeTask(taskId: string): void {
    const task = this.getTaskById(taskId)
    task.complete()
  }

  deleteTask(taskId: string) {
    const task = this.getTaskById(taskId)
    const index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
  }

  getTaskById(taskId: string): Task {
    const task = this.tasks.find((t) => t.id === taskId)
    if (!task) {
      throw new TaskNotFoundError(taskId)
    }
    return task
  }
}
