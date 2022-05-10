import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  created_at: Date

  @UpdateDateColumn({
    type: 'timestamp with time zone'
  })
  updated_at: Date
}
