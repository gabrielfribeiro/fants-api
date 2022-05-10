export interface IAddressEntity {
  street: string
  number: string
  cep: string
  city: string
  district: string
  state: string
  complement: string
}

export type IAddressDto = IAddressEntity