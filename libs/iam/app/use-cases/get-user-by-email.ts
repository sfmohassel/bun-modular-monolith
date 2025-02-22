import { UserNotFountError, UserRepo } from '@iam/core'
import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { GetUserByIdInput, GetUserByIdOutput } from '../dto/get-user-by-email'

@Injectable()
export class GetUserById extends BaseUseCase<
  GetUserByIdInput,
  GetUserByIdOutput
> {
  constructor(private readonly userRepo: UserRepo) {
    super()
  }

  async execute(input: GetUserByIdInput): Promise<GetUserByIdOutput> {
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
