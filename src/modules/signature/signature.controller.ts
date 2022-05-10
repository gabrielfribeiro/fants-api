import { SignatureService } from './signature.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignatureDto } from './dtos/signature.dto';


@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) { }
    
  @Post()
  async create(@Body() signature: SignatureDto){
      return this.signatureService.create(signature);
  }

  @Get()
  async findAll() {
      return this.signatureService.findAll();
  }

}
