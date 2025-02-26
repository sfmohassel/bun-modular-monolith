import { List, ListNotFoundError, ListRepo } from '@todo/core'

export class ListRepoImpl extends ListRepo {
  private readonly lists: Map<string, List> = new Map()

  async create(list: List): Promise<void> {
    this.lists.set(list.id, list)
  }

  async update(list: List): Promise<void> {
    if (!this.lists.has(list.id)) {
      throw new ListNotFoundError(list.id)
    }
    this.lists.set(list.id, list)
  }

  async delete(id: string): Promise<void> {
    if (!this.lists.has(id)) {
      throw new ListNotFoundError(id)
    }
    this.lists.delete(id)
  }

  async findById(id: string): Promise<List | null> {
    return this.lists.get(id) ?? null
  }

  async findByName(ownerId: string, name: string): Promise<List | null> {
    return (
      this.lists
        .values()
        .find(
          (list) =>
            list.ownerId === ownerId &&
            list.name.toLowerCase() === name.toLowerCase(),
        ) ?? null
    )
  }

  async findAll(
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
    const lists = Array.from(this.lists.values()).filter(
      (list) => list.ownerId === ownerId,
    )
    const total = lists.length

    return {
      lists: lists.slice(
        pagination.page * pagination.limit,
        (pagination.page + 1) * pagination.limit,
      ),
      total,
    }
  }
}
