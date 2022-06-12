import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./User";

@Entity()
export class Education {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  school: string;

  @Column()
  degree: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column({ default: new Date() })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.educations, {
    cascade: true,
  })
  user: UserEntity;
}
