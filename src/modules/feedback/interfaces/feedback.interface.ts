import { IRevenueEntity } from 'src/modules/revenue/interfaces/revenue.interface';
import { IUserEntity } from 'src/modules/user/interfaces/user.interface';

export interface IFeedbackEntity {
  description: string
  score: number
  revenue: IRevenueEntity
  user: IUserEntity
}

export interface IFeedbackDto {
  description: string
  score: number
  revenue_id: string
  user_id: string
}