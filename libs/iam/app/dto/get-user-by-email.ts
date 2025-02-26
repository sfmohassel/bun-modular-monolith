import { IsEmail } from 'class-validator'
import { User } from './user'

export class GetUserByIdInput {
  @IsEmail()
  email!: string
}

export class GetUserByIdOutput {
  user!: User
}
