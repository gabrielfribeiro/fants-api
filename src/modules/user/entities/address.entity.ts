import { AbstractEntity } from "src/common/abstract.entity";
import { Column, Entity } from "typeorm";
import { IAddressEntity } from "../interfaces/address.interface";

@Entity({ name: 'address' })
export class AddressEntity extends AbstractEntity implements IAddressEntity {
  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  complement: string;

}