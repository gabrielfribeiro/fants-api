export interface IWikiEntity {
  id?: string
  name: string
  age: number
  email: string
}

export type IWikiDto = Omit<IWikiEntity, 'id'>