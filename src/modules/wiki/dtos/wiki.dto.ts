import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator'
import { IWikiDto } from '../interfaces/wiki.interface'

export class WikiDto implements IWikiDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  age: number

  @IsEmail()
  @IsNotEmpty()
  email: string
}
