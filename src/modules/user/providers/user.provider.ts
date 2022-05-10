import { Provider } from "@nestjs/common";
import { Connection } from "typeorm";
import { AddressEntity } from "../entities/address.entity";
import { UserEntity } from "../entities/user.entity";

const userProviders: Provider[] = []

userProviders.push({
  provide: 'USER_MODEL',
  useFactory: (connection: Connection) => connection.getRepository(UserEntity),
  inject: ['DATABASE_CONNECTION'],
},
  {
    provide: 'ADDRESS_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(AddressEntity),
    inject: ['DATABASE_CONNECTION'],
  })

export { userProviders }