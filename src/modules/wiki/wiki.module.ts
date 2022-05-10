import { Module } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { WikiController } from './wiki.controller';
import { WikiRepository } from './wiki.repository';
import { DatabaseModule } from 'src/database/database.module';
import { wikiProviders } from './providers/wiki.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [WikiController],
  providers: [WikiService, WikiRepository, ...wikiProviders],
})
export class WikiModule { }
