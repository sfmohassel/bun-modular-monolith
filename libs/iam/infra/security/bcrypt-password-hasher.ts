import type { PasswordHasher } from '@iam/app'
import { password as passwd } from 'bun'

export class BcryptPasswordHasher implements PasswordHasher {
  hash(password: string): Promise<string> {
    return passwd.hash(password, {
      algorithm: 'bcrypt',
      cost: 14,
    })
  }
  compare(password: string, hash: string): Promise<boolean> {
    return passwd.verify(password, hash)
  }
}
