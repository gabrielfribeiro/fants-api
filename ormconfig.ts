import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

const databaseConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    join(__dirname, 'src', 'modules', '**', 'entities', '*.entity.{js,ts}')
  ],
  migrations: [join(__dirname, 'migrations/*.{js, ts}')],
  synchronize: process.env.NODE_ENV === 'development',
  cli: {
    migrationsDir: join(__dirname, 'migrations')
  }
}

export = databaseConfig
