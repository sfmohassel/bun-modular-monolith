import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { ListRepo } from '@todo/core'
import { GetListsInput, GetListsOutput } from '../dto/get-lists'

@Injectable()
export class GetLists extends BaseUseCase<GetListsInput, GetListsOutput> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: GetListsInput): Promise<GetListsOutput> {
    const res = await this.listRepo.findAll(input.ownerId, input)

    return {
      lists: res.lists.map((list) => ({
        ...list,
        tasks: list.tasks.map((task) => ({
          ...task,
        })),
      })),
      total: res.total,
    }
  }
}
