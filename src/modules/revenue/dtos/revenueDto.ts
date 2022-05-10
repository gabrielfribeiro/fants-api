import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator'
import {
  IRevenueCharacteristicDto,
  IRevenueDto
} from '../interfaces/revenue.interface'

export class RevenueCharacteristicDto implements IRevenueCharacteristicDto {
  @IsNotEmpty()
  @IsString()
  origin: string

  @IsNotEmpty()
  @IsString()
  bitterness: string

  @IsNotEmpty()
  @IsString()
  alcohol_content: string

  @IsNotEmpty()
  @IsString()
  temperature: string
}

export class RevenueDto implements IRevenueDto {
  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  @IsString()
  beer_name: string

  @IsNotEmpty()
  @IsUUID()
  beer_id: string

  @Type(() => RevenueCharacteristicDto)
  @ValidateNested({ each: true })
  characteristic: RevenueCharacteristicDto
}
