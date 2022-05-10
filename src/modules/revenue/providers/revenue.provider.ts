import { RevenueEntity } from './../entities/revenue.entity'

import { Provider } from '@nestjs/common/interfaces'
import { Connection } from 'typeorm'
import { BeerEntity } from '../entities/beer.entity'
import { StepEntity } from '../entities/step.entity'
import { CharacteristicEntity } from '../entities/characteristic.entity'
import { ItemEntity } from '../entities/item.entity'

const revenueProvider: Provider[] = []

revenueProvider.push(
  {
    provide: 'BEER_MODEL',
    useFactory: (connection: Connection) =>
      connection.getRepository(BeerEntity),
    inject: ['DATABASE_CONNECTION']
  },
  {
    provide: 'REVENUE_MODEL',
    useFactory: (connection: Connection) =>
      connection.getRepository(RevenueEntity),
    inject: ['DATABASE_CONNECTION']
  },
  {
    provide: 'STEP_MODEL',
    useFactory: (connection: Connection) =>
      connection.getRepository(StepEntity),
    inject: ['DATABASE_CONNECTION']
  },
  {
    provide: 'CHARACTERISTIC_MODEL',
    useFactory: (connection: Connection) =>
      connection.getRepository(CharacteristicEntity),
    inject: ['DATABASE_CONNECTION']
  },
  {
    provide: 'ITEM_MODEL',
    useFactory: (connection: Connection) =>
      connection.getRepository(ItemEntity),
    inject: ['DATABASE_CONNECTION']
  }
)

export { revenueProvider }
