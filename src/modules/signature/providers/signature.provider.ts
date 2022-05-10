import { Connection } from 'typeorm';
import { Provider } from '@nestjs/common/interfaces';
import { SignatureEntity } from '../entities/signature.entity';

const signatureProvider: Provider[] = []

signatureProvider.push({
    provide: 'SIGNATURE_MODEL',
    useFactory: (connection: Connection) => connection.getRepository(SignatureEntity),
    inject: ['DATABASE_CONNECTION'],
})

export { signatureProvider }