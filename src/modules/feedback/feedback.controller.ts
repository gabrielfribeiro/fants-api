import { Body, Controller, Get, Post } from "@nestjs/common";
import { FeedbackDto } from "./dto/feedbackDto";
import { FeedbackService } from "./feedback.service";

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Post()
  async createFeedback(@Body() feedback: FeedbackDto) {
    return this.feedbackService.createFeedback(feedback)
  }

  @Get()
  async findAllFeedback() {
    return this.feedbackService.findAllFeedback()
  }
}