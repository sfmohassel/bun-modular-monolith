import type { User, UserRepo } from '@iam/core'
import { uuid } from '@shared/kernel'

export class UserRepoImpl implements UserRepo {
  async add(user: User): Promise<void> {}

  async delete(id: string): Promise<void> {}

  async findByEmail(email: string): Promise<User | null> {
    return null
    return {
      id: uuid(),
      email,
      name: 'John Doe',
      password: 'hashed-password',
      createdAt: new Date(),
    }
  }
}
