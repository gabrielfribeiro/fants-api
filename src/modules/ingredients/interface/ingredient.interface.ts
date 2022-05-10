import { RevenueIngredientsEntity } from 'src/modules/revenue/entities/revenue-ingredients.entity'

export interface IIngredientEntity {
  name_ingredient: string
  description: string
  ingredient_revenue: RevenueIngredientsEntity[]
}

export type IIngredientDto = Omit<IIngredientEntity, 'ingredient_revenue'>
