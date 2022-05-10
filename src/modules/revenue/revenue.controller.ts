import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { BeerDto } from './dtos/beerDto'
import { ItemDto } from './dtos/itemDto'
import { RevenueDto } from './dtos/revenueDto'
import { StepDto } from './dtos/stepDto'
import { RevenueService } from './revenue.service'

@Controller()
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Post('revenue')
  async createRevenue(@Body() revenue: RevenueDto) {
    return this.revenueService.createRevenue(revenue)
  }

  @Get('revenue')
  async findAllRevenue() {
    return this.revenueService.findAllRevenues()
  }

  @Get('revenue/steps/:id')
  async findById(@Param('id') id: string) {
    return this.revenueService.findById(id)
  }

  // =======================================

  @Get('revenue/beer/:id')
  async findByBeerId(@Param('id') id: string) {
    return this.revenueService.findByBeerId(id)
  }

  @Post('revenue/beer')
  async createBeer(@Body() beer: BeerDto) {
    return this.revenueService.createBeer(beer)
  }

  @Get('revenue/beer')
  async findAllBeers() {
    return this.revenueService.findAllBeers()
  }

  // =======================================

  @Post('revenue/step')
  async createStep(@Body() step: StepDto) {
    return this.revenueService.createStep(step)
  }

  @Get('revenue/step')
  async findAllStep() {
    return this.revenueService.findAllStep()
  }

  // =======================================

  @Post('revenue/item')
  async createRevenueItem(@Body() item: ItemDto) {
    return this.revenueService.createItem(item)
  }
}
