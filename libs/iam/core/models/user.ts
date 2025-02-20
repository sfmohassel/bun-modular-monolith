import { BaseModel } from '@shared/kernel'

export class User extends BaseModel {
  email: string
  /**
   * Hash of the password
   */
  password: string
  name?: string

  constructor(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    super()
    this.email = user.email
    this.password = user.password
    this.name = user.name
  }
}
