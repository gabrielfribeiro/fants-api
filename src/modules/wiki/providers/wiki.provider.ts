import { Connection } from 'typeorm'
import { Provider } from '@nestjs/common/interfaces'
import { WikiEntity } from '../entities/wiki.entity'

const wikiProviders: Provider[] = []

wikiProviders.push({
  provide: 'WIKI_MODEL',
  useFactory: (connection: Connection) => connection.getRepository(WikiEntity),
  inject: ['DATABASE_CONNECTION'],
})

export { wikiProviders }
