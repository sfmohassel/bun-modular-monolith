import { AddUser, GetUserById, PasswordHasher } from '@iam/app'
import { UserRepo } from '@iam/core'
import { Module } from '@nestjs/common'
import { UserController } from './adapters/inbound/user-controller'
import { UserRepoImpl } from './adapters/outbound/user-repo'
import { BcryptPasswordHasher } from './security/bcrypt-password-hasher'

@Module({
  controllers: [UserController],
  providers: [
    AddUser,
    GetUserById,
    {
      provide: UserRepo,
      useClass: UserRepoImpl,
    },
    {
      provide: PasswordHasher,
      useClass: BcryptPasswordHasher,
    },
  ],
})
export class IAMModule {}

export * from './adapters/inbound/user-controller'
export * from './adapters/outbound/user-repo'
export * from './security/bcrypt-password-hasher'
