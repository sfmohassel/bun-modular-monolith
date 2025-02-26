import { IsUUID } from 'class-validator'

export class CompleteTaskInput {
  @IsUUID()
  listId!: string
  @IsUUID()
  taskId!: string
}
