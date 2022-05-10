import { AbstractEntity } from 'src/common/abstract.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { IStepEntity } from '../interfaces/step.interface'
import { ItemEntity } from './item.entity'

@Entity({ name: 'step' })
export class StepEntity extends AbstractEntity implements IStepEntity {
  @Column({ nullable: false })
  step_number: number

  @Column({ nullable: false })
  step_description: string

  @Column({ nullable: false })
  step_time: number

  @Column({ nullable: false })
  after_production: boolean

  @OneToMany(() => ItemEntity, (revenue) => revenue.step)
  step_revenue: ItemEntity[]
}
