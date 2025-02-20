import type { User } from '../../models/user'

export interface UserRepo {
  add(user: User): Promise<void>
  delete(id: string): Promise<void>
  findByEmail(email: string): Promise<User | null>
}
