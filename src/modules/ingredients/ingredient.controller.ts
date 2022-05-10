
import { Body, Controller, Get, Post } from "@nestjs/common";
import { IngredientDto } from "./dto/ingredientDto";
import { IngredientService } from "./ingredient.service";

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) { }

  @Post()
  async createIngredient(@Body() ingredient: IngredientDto) {
    return this.ingredientService.createIngredient(ingredient)
  }

  @Get()
  async findAllIngredient() {
    return this.ingredientService.findAllIngredient()
  }

}