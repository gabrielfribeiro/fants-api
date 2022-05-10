import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddressDto } from './dtos/address.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() user: UserDto) {
    return this.userService.createUser(user)
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers()
  }

  @Post('/address')
  async createAddress(@Body() address: AddressDto) {
    return this.userService.createAddress(address)
  }

  @Get('/address')
  async findAllAddress() {
    return this.userService.findAllAddress()
  }
}
