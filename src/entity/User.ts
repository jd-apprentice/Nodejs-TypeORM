import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  JoinTable,
} from "typeorm";
import { UserRole } from "../@types/user.type";
import { Experiences } from "./Experiences";

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 255 })
  first_name: string;

  @Column({ type: "varchar", length: 255 })
  last_name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ type: "text", array: true, nullable: true, default: [] })
  likes: string[];

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => Experiences, (experience) => experience.user)
  experiences: Experiences[];
}
