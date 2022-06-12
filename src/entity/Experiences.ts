import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./User";

@Entity()
export class Experiences {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.experiences, {
    cascade: true,
  })
  user: UserEntity;
}
