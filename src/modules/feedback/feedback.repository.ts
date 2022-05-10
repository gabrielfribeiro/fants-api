import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FeedbackEntity } from "./entities/feedback.entity";

@Injectable()
export class FeedbackRepository {
  constructor(
    @Inject('FEEDBACK_MODEL')
    private feedbackModel: Repository<FeedbackEntity>
  ) { }

  feedback = {
    create: (feedback) => this.feedbackModel.save(feedback),
    findAll: () => this.feedbackModel.find(),
  }

}