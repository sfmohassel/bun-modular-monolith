import { Injectable } from '@nestjs/common'
import { BaseUseCase } from '@shared/kernel'
import { ListRepo } from '@todo/core'
import { DeleteListInput } from '../dto/delete-list'

@Injectable()
export class DeleteList extends BaseUseCase<DeleteListInput, void> {
  constructor(private readonly listRepo: ListRepo) {
    super()
  }
  async execute(input: DeleteListInput): Promise<void> {
    await this.listRepo.delete(input.id)
  }
}
