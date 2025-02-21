export class AddUserInput {
  email!: string
  password!: string
  name?: string
}

export class AddUserOutput {
  userId!: string
}
