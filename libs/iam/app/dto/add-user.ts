import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class AddUserInput {
  @ApiProperty()
  @IsEmail()
  email!: string

  @ApiProperty()
  @IsNotEmpty()
  password!: string

  @ApiProperty()
  @IsOptional()
  name?: string
}

export class AddUserOutput {
  userId!: string
}
