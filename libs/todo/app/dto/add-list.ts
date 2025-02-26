import { IsNotEmpty, IsUUID } from 'class-validator'

export class AddListInput {
  @IsUUID()
  ownerId!: string

  @IsNotEmpty()
  name!: string
}

export class AddListOutput {
  listId!: string
}
