import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common'
import {
  AddList,
  AddListInput,
  DeleteList,
  GetLists,
  GetListsInput,
} from '@todo/app'

@Controller('lists')
export class ListController {
  constructor(
    private readonly addList: AddList,
    private readonly deleteList: DeleteList,
    private readonly getLists: GetLists,
  ) {}

  @Get()
  async list(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
    @Query('sort') sort: GetListsInput['sort'] = 'createdAt',
    @Query('sortDir') sortDir: GetListsInput['sortDir'] = 'DESC',
    @Query('ownerId') ownerId: string,
  ) {
    return this.getLists.execute({ page, limit, sort, sortDir, ownerId })
  }

  @Post()
  async create(@Body() input: AddListInput) {
    return this.addList.execute(input)
  }

  @Delete(':listId')
  async delete(@Param('listId') listId: string) {
    this.deleteList.execute({ id: listId })
  }
}
