import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { IUserDto } from "../interfaces/user.interface";

export class UserDto implements IUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  plan_type: string;

  @IsString()
  @IsNotEmpty()
  birth_date: string;

  @IsString()
  @IsNotEmpty()
  password: string

  @IsEmail()
  @IsNotEmpty()
  email: string
}