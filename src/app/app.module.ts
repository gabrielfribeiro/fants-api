import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { SignatureModule } from 'src/modules/signature/signature.module';
import { WikiModule } from 'src/modules/wiki/wiki.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RevenueModule } from 'src/modules/revenue/revenue.module';
import { IngredientModule } from 'src/modules/ingredients/ingredient.module';
import { FeedbackModule } from 'src/modules/feedback/feedback.module';

@Module({
  imports: [WikiModule, UserModule, SignatureModule, RevenueModule, IngredientModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
