import { Task } from './task'

export interface List {
  id: string
  createdAt: Date
  updatedAt?: Date
  name: string
  description?: string
  tasks: Task[]
}
