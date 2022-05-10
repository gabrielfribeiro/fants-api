import { AbstractEntity } from 'src/common/abstract.entity'
import { IngredientEntity } from 'src/modules/ingredients/entities/ingredient.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { IRevenueIngredientsEntity } from '../interfaces/revenue-ingredients.interface'
import { RevenueEntity } from './revenue.entity'

@Entity({ name: 'revenueIngredients' })
export class RevenueIngredientsEntity
  extends AbstractEntity
  implements IRevenueIngredientsEntity
{
  @Column({ nullable: false })
  qtd: number

  @Column({ nullable: false, type: 'uuid' })
  revenue_id: string

  @ManyToOne(() => RevenueEntity, (revenue) => revenue.revenue_ingredients)
  @JoinColumn({ name: 'revenue_id' })
  revenue: RevenueEntity

  @Column({ nullable: false, type: 'uuid' })
  ingredients_id: string

  @ManyToOne(
    () => IngredientEntity,
    (ingredient) => ingredient.ingredient_revenue,
    { eager: true }
  )
  @JoinColumn({ name: 'ingredients_id' })
  ingredients: IngredientEntity[]
}
