import { IsUUID } from 'class-validator'

export class DeleteTaskInput {
  @IsUUID()
  listId!: string

  @IsUUID()
  taskId!: string
}
