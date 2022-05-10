import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { IngredientEntity } from "./entities/ingredient.entity";

export class IngredientRepository {
  constructor(
    @Inject('INGREDIENT_MODEL')
    private ingredientModel: Repository<IngredientEntity>
  ) { }

  ingredient = {
    create: (ingredient) => this.ingredientModel.save(ingredient),
    findAll: () => this.ingredientModel.find()
  }

}