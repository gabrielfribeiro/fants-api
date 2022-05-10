import { AbstractEntity } from "src/common/abstract.entity";
import { RevenueEntity } from "src/modules/revenue/entities/revenue.entity";
import { IRevenueEntity } from "src/modules/revenue/interfaces/revenue.interface";
import { UserEntity } from "src/modules/user/entities/user.entity";
import { IUserEntity } from "src/modules/user/interfaces/user.interface";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { IFeedbackEntity } from "../interfaces/feedback.interface";

@Entity({ name: 'feedback' })
export class FeedbackEntity extends AbstractEntity implements IFeedbackEntity {

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  score: number;

  @Column({ nullable: false, type: 'uuid' })
  revenue_id: RevenueEntity['id']

  @OneToOne(() => RevenueEntity)
  @JoinColumn({ name: 'revenue_id' })
  revenue: IRevenueEntity;

  @Column({ nullable: false, type: 'uuid' })
  user_id: UserEntity['id']

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: IUserEntity;

}