import { IBeerEntity } from '../interfaces/beer.interface'
import { Column, Entity } from 'typeorm'
import { AbstractEntity } from 'src/common/abstract.entity'
@Entity({ name: 'beer' })
export class BeerEntity extends AbstractEntity implements IBeerEntity {
  @Column({ nullable: false })
  beer_type: string

  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  url_image: string
}
