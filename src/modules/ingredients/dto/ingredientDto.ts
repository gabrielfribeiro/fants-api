import { IsNotEmpty, IsString } from 'class-validator';
import { IIngredientDto } from '../interface/ingredient.interface';

export class IngredientDto implements IIngredientDto {

  @IsString()
  @IsNotEmpty()
  name_ingredient: string;

  @IsString()
  @IsNotEmpty()
  description: string
}