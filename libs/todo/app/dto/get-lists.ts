import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsUUID, Max, Min } from 'class-validator'
import { List } from './list'

export class GetListsInput {
  @Type(() => Number)
  @IsInt()
  @Min(0)
  page!: number

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit!: number

  @IsEnum(['createdAt', 'title'])
  sort!: 'createdAt' | 'title'

  @IsEnum(['ASC', 'DESC'])
  sortDir!: 'ASC' | 'DESC'

  @IsUUID()
  ownerId!: string
}

export class GetListsOutput {
  lists!: List[]
  total!: number
}
