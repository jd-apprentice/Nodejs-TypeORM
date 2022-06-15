import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./User";

@Entity()
export class Educations extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  school: string;

  @Column()
  degree: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.educations, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: UserEntity;
}