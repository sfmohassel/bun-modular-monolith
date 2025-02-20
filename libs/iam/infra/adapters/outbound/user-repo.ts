import type { User, UserRepo } from '@iam/core'

export class UserRepoImpl implements UserRepo {
  async add(user: User): Promise<void> {
    // Add user to the database
  }

  async delete(id: string): Promise<void> {
    // Delete user from the database
  }

  async findByEmail(email: string): Promise<User | null> {
    // Find user in the database
    return null
  }
}
