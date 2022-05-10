import { Repository } from 'typeorm'
import { Inject, Injectable } from '@nestjs/common'
import { BeerEntity } from './entities/beer.entity'
import { IBeerEntity } from './interfaces/beer.interface'
import { RevenueEntity } from './entities/revenue.entity'
import { StepEntity } from './entities/step.entity'
import { IStepEntity } from './interfaces/step.interface'
import { ICreateRevenue } from './interfaces/revenue.interface'
import { CharacteristicEntity } from './entities/characteristic.entity'
import { ICharacteristicEntity } from './interfaces/characteristic.interface'
import { ItemEntity } from './entities/item.entity'

@Injectable()
export class RevenueRepository {
  constructor(
    @Inject('REVENUE_MODEL')
    private revenueModel: Repository<RevenueEntity>,

    @Inject('BEER_MODEL')
    private beerModel: Repository<BeerEntity>,

    @Inject('STEP_MODEL')
    private stepModel: Repository<StepEntity>,

    @Inject('CHARACTERISTIC_MODEL')
    private characteristicModel: Repository<CharacteristicEntity>,

    @Inject('ITEM_MODEL')
    private itemModel: Repository<ItemEntity>
  ) {}

  beer = {
    create: (beerPayload: IBeerEntity) => this.beerModel.save(beerPayload),
    findAll: () => this.beerModel.find()
  }

  revenue = {
    create: (revenuePayload: ICreateRevenue) =>
      this.revenueModel.save(revenuePayload),
    findAll: () => this.revenueModel.find(),
    findByBeerId: (id: string) =>
      this.revenueModel.findOne({ where: { beer_id: id } }),
    findById: (id: string) => this.revenueModel.findOne(id)
  }

  step = {
    create: (stepPayload: IStepEntity) => this.stepModel.save(stepPayload),
    findAll: () => this.stepModel.find()
  }

  characteristic = {
    create: (characteristicPayload: ICharacteristicEntity) =>
      this.characteristicModel.save(characteristicPayload),
    findAll: () => this.characteristicModel.find(),
    findById: (id: string) => this.characteristicModel.findOne(id)
  }

  item = {
    create: (item: ItemEntity) => this.itemModel.save(item)
  }
}
