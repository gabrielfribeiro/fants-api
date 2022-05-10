import { WikiRepository } from './wiki.repository';
import { Injectable } from '@nestjs/common';
import { WikiDto } from './dtos/wiki.dto';

@Injectable()
export class WikiService {
  constructor(
    private wikiRepository: WikiRepository
  ) { }

  async create(wiki: WikiDto) {
    return this.wikiRepository.create(wiki)
  }

  async findAll() {
    return this.wikiRepository.findAll();
  }

  async findById(id: string) {
    return this.wikiRepository.findById(id);
  }

  async update(id: string, wiki: WikiDto) {
    return this.wikiRepository.update(id, wiki);
  }

  async delete(id: string) {
    return this.wikiRepository.delete(id);
  }
}
