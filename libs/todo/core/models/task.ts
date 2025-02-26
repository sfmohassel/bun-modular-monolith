import { BaseModel } from '@shared/kernel'

export class Task extends BaseModel {
  title: string
  description?: string
  completed: boolean

  constructor(task: Pick<Task, 'title' | 'description'>) {
    super()
    this.title = task.title
    this.description = task.description
    this.completed = false
  }

  complete(): void {
    this.completed = true
    this.updatedAt = new Date()
  }
}
