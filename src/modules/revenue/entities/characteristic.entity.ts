import { AbstractEntity } from 'src/common/abstract.entity'
import { Column, Entity } from 'typeorm'
import { ICharacteristicEntity } from '../interfaces/characteristic.interface'

@Entity({ name: 'characteristic' })
export class CharacteristicEntity
  extends AbstractEntity
  implements ICharacteristicEntity
{
  @Column({ nullable: false })
  origin: string

  @Column({ nullable: false })
  bitterness: string

  @Column({ nullable: false })
  alcohol_content: string

  @Column({ nullable: false })
  temperature: string
}
