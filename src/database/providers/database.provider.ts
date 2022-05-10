import { createConnection } from 'typeorm';
import * as config from '../../../ormconfig';

function useDatabaseProviders() {
  const databaseProvidersOptions = {
    default: [{
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => createConnection(config),
    }]
  };

  return databaseProvidersOptions['default']
}

const databaseProviders = useDatabaseProviders();

export { databaseProviders };