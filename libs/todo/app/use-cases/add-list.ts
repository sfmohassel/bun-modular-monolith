import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { List, ListAlreadyExistsError, ListRepo } from '@todo/core'
import { AddListInput, AddListOutput } from '../dto/add-list'

@Injectable()
export class AddList extends BaseUseCase<AddListInput, AddListOutput> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: AddListInput): Promise<AddListOutput> {
    const foundList = await this.listRepo.findByName(input.ownerId, input.name)
    if (foundList) {
      throw new ListAlreadyExistsError(input.name)
    }

    const list = new List({ ownerId: input.ownerId, name: input.name })
    await this.listRepo.create(list)

    return { listId: list.id }
  }
}
