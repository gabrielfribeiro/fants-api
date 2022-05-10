import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity } from 'typeorm';
import { ISignatureEntity } from './../interfaces/signature.interface';

@Entity({ name: ' signature ' })
export class SignatureEntity extends AbstractEntity implements ISignatureEntity {
    @Column({ nullable: false })
    plan_name: string;

    @Column({ nullable: false })
    price: number;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    initial_date: string;

    @Column({ nullable: false })
    final_date: string;
}