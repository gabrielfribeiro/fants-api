import { ItemEntity } from '../entities/item.entity'

export interface IStepEntity {
  step_number: number
  step_description: string
  step_time: number
  after_production: boolean
  step_revenue: ItemEntity[]
}

export type IStepDTO = Omit<IStepEntity, 'step_revenue'>
