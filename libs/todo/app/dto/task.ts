export interface Task {
  id: string
  createdAt: Date
  updatedAt?: Date
  title: string
  description?: string
  completed: boolean
}
