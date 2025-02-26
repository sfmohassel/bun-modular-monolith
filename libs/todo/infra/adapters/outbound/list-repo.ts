import { List, ListRepo } from '@todo/core'

export class ListRepoImpl extends ListRepo {
  create(list: List): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(list: List): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<List | null> {
    throw new Error('Method not implemented.')
  }
  findByName(ownerId: string, name: string): Promise<List | null> {
    throw new Error('Method not implemented.')
  }
  findAll(
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
  }> {
    throw new Error('Method not implemented.')
  }
}
