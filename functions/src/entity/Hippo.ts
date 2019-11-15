import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm'

@Entity()
export class Hippo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  weight: number

  @CreateDateColumn()
  createdAt: Date;
}
