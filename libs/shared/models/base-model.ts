import { uuid } from '../random/uuid'

export abstract class BaseModel {
  readonly id: string
  readonly createdAt: Date
  updatedAt?: Date

  protected constructor() {
    this.id = uuid()
    this.createdAt = new Date()
  }
}
