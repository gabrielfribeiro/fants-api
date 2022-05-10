import { Provider } from '@nestjs/common/interfaces';
import { Connection } from 'typeorm';
import { IngredientEntity } from '../entities/ingredient.entity';

const ingredientProvider: Provider[] = []

ingredientProvider.push({
  provide: 'INGREDIENT_MODEL',
  useFactory: (connection: Connection) => connection.getRepository(IngredientEntity),
  inject: ['DATABASE_CONNECTION']
})

export { ingredientProvider }