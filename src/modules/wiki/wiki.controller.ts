import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { WikiDto } from './dtos/wiki.dto';
import { WikiService } from './wiki.service';

@Controller('wiki')
export class WikiController {
  constructor(private readonly wikiService: WikiService) { }

  @Post()
  async create(@Body() wiki: WikiDto) {
    return this.wikiService.create(wiki);
  }

  @Get()
  async findAll() {
    return this.wikiService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.wikiService.findById(id);
  }

  @Put('/:id')
  async update(@Body() wiki: WikiDto, @Param('id') id: string) {
    return this.wikiService.update(id, wiki);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.wikiService.delete(id);
  }
}
