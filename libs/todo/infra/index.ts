import { Module } from '@nestjs/common'
import {
  AddList,
  AddTask,
  CompleteTask,
  DeleteList,
  DeleteTask,
  GetLists,
} from '@todo/app'
import { ListRepo } from '@todo/core'
import { ListController } from './adapters/inbound/list-controller'
import { TaskController } from './adapters/inbound/task-controller'
import { ListRepoImpl } from './adapters/outbound/list-repo'

@Module({
  controllers: [ListController, TaskController],
  providers: [
    AddList,
    AddTask,
    CompleteTask,
    DeleteList,
    DeleteTask,
    GetLists,
    {
      provide: ListRepo,
      useClass: ListRepoImpl,
    },
  ],
})
export class TodoModule {}

export * from './adapters/inbound/list-controller'
export * from './adapters/outbound/list-repo'
