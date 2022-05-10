import { AbstractEntity } from 'src/common/abstract.entity';
import { Entity, Column } from 'typeorm'
import { IWikiEntity } from '../interfaces/wiki.interface';

@Entity({ name: 'wiki' })
export class WikiEntity extends AbstractEntity implements IWikiEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false })
  email: string;
}