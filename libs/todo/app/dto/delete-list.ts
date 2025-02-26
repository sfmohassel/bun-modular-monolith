import { IsUUID } from 'class-validator'

export class DeleteListInput {
  @IsUUID()
  id!: string
}
