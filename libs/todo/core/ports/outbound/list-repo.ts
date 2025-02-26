import { Injectable } from '@nestjs/common'
import { List } from '../../models/list'

@Injectable()
export abstract class ListRepo {
  abstract create(list: List): Promise<void>
  abstract update(list: List): Promise<void>
  abstract delete(id: string): Promise<void>
  abstract findById(id: string): Promise<List | null>
  abstract findByName(ownerId: string, name: string): Promise<List | null>
  abstract findAll(
    ownerId: string,
    pagination: {
      page: number
      limit: number
      sort: 'createdAt' | 'title'
      sortDir: 'ASC' | 'DESC'
    },
  ): Promise<{
    lists: List[]
    total: number
  }>
}
