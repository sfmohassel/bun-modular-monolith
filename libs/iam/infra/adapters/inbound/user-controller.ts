import { AddUser, AddUserInput, GetUserById as GetUserByEmail } from '@iam/app'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'

@Controller('users')
export class UserController {
  constructor(
    private readonly getUserByEmail: GetUserByEmail,
    private readonly addUser: AddUser,
  ) {}

  @Get(':email')
  async getByEmail(@Param('email') email: string) {
    return this.getUserByEmail.execute({ email })
  }

  @Post()
  async add(@Body() input: AddUserInput) {
    return this.addUser.execute(input)
  }
}
