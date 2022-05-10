import { IsNotEmpty, IsString } from 'class-validator'
import { IBeerDto } from '../interfaces/beer.interface'

export class BeerDto implements IBeerDto {
  @IsString()
  @IsNotEmpty()
  beer_type: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  url_image: string
}
