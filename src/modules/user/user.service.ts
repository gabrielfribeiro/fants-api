import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async createUser(user: UserDto) {
    return this.userRepository.user.create(user)
  }

  async findAllUsers() {
    return this.userRepository.user.findAll()
  }

  async createAddress(address) {
    return this.userRepository.address.create(address)
  }

  async findAllAddress() {
    return this.userRepository.address.findAll()
  }
}
