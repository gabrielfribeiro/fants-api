import { Injectable } from "@nestjs/common";
import { IngredientDto } from "./dto/ingredientDto";
import { IngredientRepository } from "./ingredient.repository";

@Injectable()
export class IngredientService {
  constructor(private ingredientRepository: IngredientRepository) { }

  async createIngredient(ingredient: IngredientDto) {
    return this.ingredientRepository.ingredient.create(ingredient)
  }

  async findAllIngredient() {
    return this.ingredientRepository.ingredient.findAll()
  }

}