import { User } from './user'

export class GetUserByIdInput {
  email!: string
}

export class GetUserByIdOutput {
  user!: User
}
