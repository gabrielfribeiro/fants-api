import { AbstractEntity } from 'src/common/abstract.entity'
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { IBeerEntity } from '../interfaces/beer.interface'
import { ICharacteristicEntity } from '../interfaces/characteristic.interface'
import { IRevenueEntity } from '../interfaces/revenue.interface'
import { BeerEntity } from './beer.entity'
import { CharacteristicEntity } from './characteristic.entity'
import { ItemEntity } from './item.entity'
import { RevenueIngredientsEntity } from './revenue-ingredients.entity'

@Entity({ name: 'revenue' })
export class RevenueEntity extends AbstractEntity implements IRevenueEntity {
  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  type: string

  @Column({ nullable: false })
  beer_name: string

  @Column({ nullable: false })
  characteristic_id: CharacteristicEntity['id']

  @OneToOne(() => CharacteristicEntity)
  @JoinColumn({ name: 'characteristic_id' })
  characteristic: ICharacteristicEntity

  @Column({ nullable: false, type: 'uuid' })
  beer_id: BeerEntity['id']

  @OneToOne(() => BeerEntity)
  @JoinColumn({ name: 'beer_id' })
  beer: IBeerEntity

  @OneToMany(
    () => RevenueIngredientsEntity,
    (ingredients) => ingredients.revenue,
    { eager: true }
  )
  revenue_ingredients: RevenueIngredientsEntity[]

  @OneToMany(() => ItemEntity, (step) => step.revenue, { eager: true })
  revenue_step: ItemEntity[]
}
