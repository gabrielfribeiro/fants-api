import { Injectable } from "@nestjs/common";
import { SignatureDto } from "./dtos/signature.dto";
import { SignatureRepository } from "./signature.repository";

@Injectable()
export class SignatureService {
    constructor(
        private signatureRepository: SignatureRepository
    ){ }

    async create(signature: SignatureDto) {
        return this.signatureRepository.create(signature)
    }

    async findAll() {
        return this.signatureRepository.findAll();
    }
}
