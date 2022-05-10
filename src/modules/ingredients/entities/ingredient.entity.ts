import { AbstractEntity } from 'src/common/abstract.entity'
import { RevenueIngredientsEntity } from 'src/modules/revenue/entities/revenue-ingredients.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { IIngredientEntity } from '../interface/ingredient.interface'

@Entity({ name: 'ingredient' })
export class IngredientEntity
  extends AbstractEntity
  implements IIngredientEntity
{
  @Column({ nullable: false })
  name_ingredient: string

  @Column({ nullable: false })
  description: string

  @OneToMany(() => RevenueIngredientsEntity, (revenue) => revenue.ingredients)
  ingredient_revenue: RevenueIngredientsEntity[]
}
