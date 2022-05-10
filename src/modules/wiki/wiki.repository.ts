import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { WikiEntity } from "./entities/wiki.entity";
import { IWikiEntity } from "./interfaces/wiki.interface";

@Injectable()
export class WikiRepository {
  constructor(
    @Inject('WIKI_MODEL')
    private wikiModel: Repository<WikiEntity>
  ) { }

  async create(wikiPayload: IWikiEntity) {
    return this.wikiModel.save(wikiPayload)
  }

  async findAll() {
    return this.wikiModel.find()
  }

  async findById(id: string) {
    return this.wikiModel.findOne(id)
  }

  async update(id: string, wiki: IWikiEntity) {
    return this.wikiModel.update(id, wiki)
  }

  async delete(id: string) {
    return this.wikiModel.delete(id)
  }
}