import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { IFeedbackDto } from "../interfaces/feedback.interface";

export class FeedbackDto implements IFeedbackDto {
  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  score: number

  @IsNotEmpty()
  @IsUUID()
  user_id: string

  @IsNotEmpty()
  @IsUUID()
  revenue_id: string
}