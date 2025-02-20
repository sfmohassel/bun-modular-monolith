import { password as passwd } from 'bun'

export class PasswordHasher {
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
