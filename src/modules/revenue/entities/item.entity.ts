import { AbstractEntity } from 'src/common/abstract.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { IItemEntity } from '../interfaces/item.interface'
import { RevenueEntity } from './revenue.entity'
import { StepEntity } from './step.entity'

@Entity({ name: 'item' })
export class ItemEntity extends AbstractEntity implements IItemEntity {
  @Column({ nullable: false })
  description: string

  @Column({ nullable: false, type: 'uuid' })
  step_id: string

  @ManyToOne(() => StepEntity, (step) => step.step_revenue, { eager: true })
  @JoinColumn({ name: 'step_id' })
  step: StepEntity

  @Column({ nullable: false, type: 'uuid' })
  revenue_id: string

  @ManyToOne(() => RevenueEntity, (revenue) => revenue)
  @JoinColumn({ name: 'revenue_id' })
  revenue: RevenueEntity
}
