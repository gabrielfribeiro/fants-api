import { ISignatureEntity } from "src/modules/signature/interfaces/signature.interface";
import { IAddressEntity } from "./address.interface";

export interface IUserEntity {
  name: string
  plan_type: string
  birth_date: string
  address: IAddressEntity
  signature: ISignatureEntity
}

export type IUserDto = Omit<IUserEntity, 'address' | 'signature'>