import { Connection } from 'typeorm';
import { Provider } from "@nestjs/common";
import { FeedbackEntity } from '../entities/feedback.entity';

const feedbackProviders: Provider[] = []

feedbackProviders.push({
  provide: 'FEEDBACK_MODEL',
  useFactory: (connection: Connection) => connection.getRepository(FeedbackEntity),
  inject: ['DATABASE_CONNECTION'],
})

export { feedbackProviders }
