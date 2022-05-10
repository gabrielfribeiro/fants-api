import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { IStepDTO } from './../interfaces/step.interface'

export class StepDto implements IStepDTO {
  @IsNotEmpty()
  @IsNumber()
  step_number: number

  @IsNotEmpty()
  @IsString()
  step_description: string

  @IsNotEmpty()
  @IsNumber()
  step_time: number

  @IsNotEmpty()
  @IsBoolean()
  after_production: boolean
}
