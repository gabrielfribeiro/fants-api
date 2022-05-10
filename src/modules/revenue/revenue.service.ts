import { Injectable } from '@nestjs/common'
import {
  CANNOT_CREATE_CHARACTERISTIC,
  CANNOT_FIND_CHARACTERISTIC
} from 'src/utils/errors/errors'
import { BeerDto } from './dtos/beerDto'
import { ItemEntity } from './entities/item.entity'
import { RevenueEntity } from './entities/revenue.entity'
import { ICharacteristicEntity } from './interfaces/characteristic.interface'
import { IRevenueDto, IRevenueEntity } from './interfaces/revenue.interface'
import { RevenueRepository } from './revenue.repository'

@Injectable()
export class RevenueService {
  constructor(private revenueRepository: RevenueRepository) {}

  // ================= BEER ====================
  async findAllBeers() {
    return this.revenueRepository.beer.findAll()
  }

  async createBeer(beer: BeerDto) {
    return this.revenueRepository.beer.create(beer)
  }

  async findByBeerId(id: string) {
    const revenue = await this.revenueRepository.revenue.findByBeerId(id)

    const characteristics =
      await this.revenueRepository.characteristic.findById(
        revenue.characteristic_id
      )

    if (!characteristics) throw new CANNOT_FIND_CHARACTERISTIC()

    return this.handleFindRevenue(revenue, characteristics)
  }

  // =======================================

  async createRevenue(revenue: IRevenueDto) {
    const characteristic = await this.createCharancteristic(
      revenue.characteristic
    )

    if (!characteristic) throw new CANNOT_CREATE_CHARACTERISTIC()

    const revenueHandled = this.handleRevenue(revenue, characteristic.id)

    return this.revenueRepository.revenue.create(revenueHandled)
  }

  async findAllRevenues() {
    return this.revenueRepository.revenue.findAll()
  }

  async findById(id: string) {
    const revenue = await this.revenueRepository.revenue.findById(id)

    const handledRevenue = this.handleSteps(revenue, revenue.revenue_step)

    return handledRevenue
  }

  private handleSteps(revenue: RevenueEntity, items) {
    const steps = items.map((_item, index) => {
      return items.filter((step) => step.step.step_number === index + 1)
    })

    const filteredSteps = steps.filter((step) => step.length > 0)

    return {
      id: revenue.id,
      created_at: revenue.created_at,
      updated_at: revenue.updated_at,
      description: revenue.description,
      type: revenue.type,
      beer_name: revenue.beer_name,
      characteristic_id: revenue.characteristic_id,
      beer_id: revenue.beer_id,
      revenue_ingredients: revenue.revenue_ingredients,
      revenue_step: filteredSteps
    }
  }

  // =======================================

  async createStep(step) {
    return this.revenueRepository.step.create(step)
  }

  async findAllStep() {
    return this.revenueRepository.step.findAll()
  }

  // =======================================

  async createCharancteristic(characteristic: ICharacteristicEntity) {
    return this.revenueRepository.characteristic.create(characteristic)
  }

  // =======================================

  async createItem(item) {
    return this.revenueRepository.item.create(item)
  }

  // =======================================

  private handleRevenue = (revenue: IRevenueDto, characteristic_id: string) => {
    return {
      description: revenue.description,
      type: revenue.type,
      beer_name: revenue.beer_name,
      beer_id: revenue.beer_id,
      characteristic_id
    }
  }

  private handleFindRevenue = (
    revenue: IRevenueEntity,
    characteristics: ICharacteristicEntity
  ) => {
    return {
      revenue,
      characteristic: characteristics
    }
  }
}
