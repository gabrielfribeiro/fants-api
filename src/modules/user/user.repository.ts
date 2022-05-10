import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { AddressEntity } from "./entities/address.entity";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Repository<UserEntity>,
    @Inject('ADDRESS_MODEL')
    private addressModel: Repository<AddressEntity>,
  ) { }

  user = {
    create: (user) => this.userModel.save(user),
    findAll: () => this.userModel.find(),
  }

  address = {
    create: (address) => this.addressModel.save(address),
    findAll: () => this.addressModel.find(),
  }

}