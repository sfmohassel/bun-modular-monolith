import { UserNotFountError, type UserRepo } from '@iam/core'
import { BaseUseCase } from '@shared/kernel'
import type { GetUserInput, GetUserOutput } from '../dto/get-user'

export class GetUser extends BaseUseCase<GetUserInput, GetUserOutput> {
  constructor(private readonly userRepo: UserRepo) {
    super()
  }

  async execute(input: GetUserInput): Promise<GetUserOutput> {
    const foundUser = await this.userRepo.findByEmail(input.email)
    if (!foundUser) {
      throw new UserNotFountError(input.email)
    }
    return {
      user: {
        ...foundUser,
      },
    }
  }
}
