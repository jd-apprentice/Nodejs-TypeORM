import { Entity, Column, OneToMany } from "typeorm";
import { UserRole } from "../@types/user.type";
import { CustomEntity } from "./CustomEntity";
import { Educations } from "./Educations";
import { Experiences } from "./Experiences";

@Entity()
export class UserEntity extends CustomEntity {
  @Column({ type: "varchar", length: 255 })
  first_name: string;

  @Column({ type: "varchar", length: 255 })
  last_name: string;

  @Column({ nullable: true })
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
  isActive: boolean;

  @OneToMany(() => Experiences, (experience) => experience.user)
  experiences: Experiences[];

  @OneToMany(() => Educations, (education) => education.user)
  educations: Educations[];
}
