import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { RevenueEntity } from '../entities/revenue.entity'
import { StepEntity } from '../entities/step.entity'
import { IItemDto } from '../interfaces/item.interface'

export class ItemDto implements IItemDto {
  @IsString()
  @IsNotEmpty()
  description: string

  @IsUUID()
  @IsNotEmpty()
  step_id: string

  @IsUUID()
  @IsNotEmpty()
  revenue_id: string
}
