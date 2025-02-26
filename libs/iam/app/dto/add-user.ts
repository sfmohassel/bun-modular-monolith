import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class AddUserInput {
  @IsEmail()
  email!: string

  @IsNotEmpty()
  password!: string

  @IsOptional()
  name?: string
}

export class AddUserOutput {
  userId!: string
}
