import { User, UserRepo } from '@iam/core'

export class UserRepoImpl extends UserRepo {
  private readonly users: Map<string, User> = new Map()

  async add(user: User): Promise<void> {
    this.users.set(user.id, user)
  }

  async findByEmail(email: string): Promise<User | null> {
    return (
      Array.from(this.users.values()).find((u) => u.email === email) || null
    )
  }
}
