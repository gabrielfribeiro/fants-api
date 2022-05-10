import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { FeedbackController } from "./feedback.controller";
import { FeedbackRepository } from "./feedback.repository";
import { FeedbackService } from "./feedback.service";
import { feedbackProviders } from "./providers/feedback.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackRepository, ...feedbackProviders],
})
export class FeedbackModule { }