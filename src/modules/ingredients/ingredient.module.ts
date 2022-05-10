import { IngredientController } from './ingredient.controller'
import { DatabaseModule } from './../../database/database.module'
import { Module } from '@nestjs/common'
import { IngredientService } from './ingredient.service'
import { IngredientRepository } from './ingredient.repository'
import { ingredientProvider } from './providers/ingredient.provider'

@Module({
  imports: [DatabaseModule],
  controllers: [IngredientController],
  providers: [IngredientService, IngredientRepository, ...ingredientProvider],
  exports: [IngredientService, IngredientRepository, ...ingredientProvider]
})
export class IngredientModule {}
