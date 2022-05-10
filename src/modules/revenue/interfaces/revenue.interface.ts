import { ItemEntity } from '../entities/item.entity'
import { RevenueIngredientsEntity } from '../entities/revenue-ingredients.entity'
import { IBeerEntity } from './beer.interface'
import { ICharacteristicEntity } from './characteristic.interface'

export interface IRevenueEntity {
  description: string
  type: string
  beer_name: string
  characteristic: ICharacteristicEntity
  beer: IBeerEntity
  revenue_ingredients: RevenueIngredientsEntity[]
  revenue_step: ItemEntity[]
}

export interface ICreateRevenue {
  description: string
  type: string
  beer_name: string
  beer_id: string
  characteristic_id: string
}

export interface IRevenueCharacteristicDto {
  origin: string
  bitterness: string
  alcohol_content: string
  temperature: string
}

export interface IRevenueDto {
  description: string
  type: string
  beer_name: string
  beer_id: string
  characteristic: IRevenueCharacteristicDto
}
