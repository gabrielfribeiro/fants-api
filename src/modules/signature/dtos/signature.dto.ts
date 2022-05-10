import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { ISignatureDto } from './../interfaces/signature.interface';

export class SignatureDto implements ISignatureDto {
    @IsString()
    @IsNotEmpty()
    plan_name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    initial_date: string;

    @IsString()
    @IsNotEmpty()
    final_date: string;

}