import { User, UserExistsError, type UserRepo } from '@iam/core'
import { BaseUseCase } from '@shared/kernel'
import type { AddUserInput, AddUserOutput } from '../dto/add-user'
import type { PasswordHasher } from '../services/password-hasher'

export class AddUser extends BaseUseCase<AddUserInput, AddUserOutput> {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly passwordHasher: PasswordHasher,
  ) {
    super()
  }

  async execute(input: AddUserInput): Promise<AddUserOutput> {
    const foundUser = await this.userRepo.findByEmail(input.email)
    if (foundUser) {
      throw new UserExistsError(input.email)
    }

    const hashedPassword = await this.passwordHasher.hash(input.password)

    const user = new User({
      email: input.email,
      password: hashedPassword,
      name: input.name,
    })

    await this.userRepo.add(user)

    return { userId: user.id }
  }
}
