import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { IngredientEntity } from '../ingredients/entities/ingredient.entity'
import { revenueProvider } from './providers/revenue.provider'
import { RevenueController } from './revenue.controller'
import { RevenueRepository } from './revenue.repository'
import { RevenueService } from './revenue.service'

@Module({
  imports: [DatabaseModule, IngredientEntity],
  controllers: [RevenueController],
  providers: [RevenueService, RevenueRepository, ...revenueProvider],
  exports: [RevenueService, RevenueRepository, ...revenueProvider]
})
export class RevenueModule {}
