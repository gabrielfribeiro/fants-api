import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { signatureProvider } from './providers/signature.provider';
import { SignatureController } from './signature.controller';
import { SignatureRepository } from './signature.repository';
import { SignatureService } from './signature.service';


@Module({
  imports: [DatabaseModule],
  controllers: [SignatureController],
  providers: [SignatureService, SignatureRepository, ...signatureProvider],
})
export class SignatureModule { }
