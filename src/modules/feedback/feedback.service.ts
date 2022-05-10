import { Injectable } from "@nestjs/common";
import { FeedbackDto } from "./dto/feedbackDto";
import { FeedbackRepository } from "./feedback.repository";

@Injectable()
export class FeedbackService {
  constructor(
    private feedbackRepository: FeedbackRepository
  ) { }

  async createFeedback(feedback: FeedbackDto) {
    return this.feedbackRepository.feedback.create(feedback)
  }

  async findAllFeedback() {
    return this.feedbackRepository.feedback.findAll()
  }

}