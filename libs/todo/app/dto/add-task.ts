import { IsUUID } from 'class-validator'

export class AddTaskInput {
  @IsUUID()
  listId!: string

  @IsUUID()
  title!: string
  description?: string
}

export class AddTaskOutput {
  taskId!: string
}
