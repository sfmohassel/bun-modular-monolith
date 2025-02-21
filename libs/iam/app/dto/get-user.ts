import type { User } from './user'

export class GetUserInput {
  email!: string
}

export class GetUserOutput {
  user!: User
}
