import { AbstractEntity } from "src/common/abstract.entity";
import { SignatureEntity } from "src/modules/signature/entities/signature.entity";
import { ISignatureEntity } from "src/modules/signature/interfaces/signature.interface";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { IAddressEntity } from "../interfaces/address.interface";
import { IUserEntity } from "../interfaces/user.interface";
import { AddressEntity } from "./address.entity";

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity implements IUserEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  plan_type: string;

  @Column({ nullable: false })
  birth_date: string;


  @Column({ nullable: false, type: 'uuid' })
  signature_id: SignatureEntity['id']

  @OneToOne(() => SignatureEntity)
  @JoinColumn({ name: 'signature_id' })
  signature: ISignatureEntity;

  @Column({ nullable: false, type: 'uuid' })
  address_id: AddressEntity['id']

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: IAddressEntity;
}