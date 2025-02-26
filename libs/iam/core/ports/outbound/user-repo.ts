import { Injectable } from '@nestjs/common'
import { User } from '../../models/user'

@Injectable()
export abstract class UserRepo {
  abstract add(user: User): Promise<void>
  abstract findByEmail(email: string): Promise<User | null>
}
