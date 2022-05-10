import { ISignatureEntity } from './interfaces/signature.interface';
import { Repository } from 'typeorm';
import { SignatureEntity } from './entities/signature.entity';
import { Inject, Injectable } from '@nestjs/common';


@Injectable()
export class SignatureRepository {
    constructor(
        @Inject('SIGNATURE_MODEL')
        private signatureModel: Repository<SignatureEntity>
    ){ }
    
    async create(signaturePayLoad: ISignatureEntity) {
        return this.signatureModel.save(signaturePayLoad)
    } 

    async findAll() { 
        return this.signatureModel.find()
    }

}