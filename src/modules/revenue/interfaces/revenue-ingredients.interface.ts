import { IngredientEntity } from 'src/modules/ingredients/entities/ingredient.entity'
import { RevenueEntity } from '../entities/revenue.entity'

export interface IRevenueIngredientsEntity {
  qtd: number
  revenue: RevenueEntity
  ingredients: IngredientEntity[]
}
