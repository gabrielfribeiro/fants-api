import { RevenueEntity } from '../entities/revenue.entity'
import { StepEntity } from '../entities/step.entity'

export interface IItemEntity {
  description: string
  step: StepEntity
  revenue: RevenueEntity
}

export interface IItemDto {
  description: string
  step_id: string
  revenue_id: string
}
