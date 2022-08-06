import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { CustomEntity } from "./CustomEntity";
import { Educations } from "./Educations";
import { Experiences } from "./Experiences";
import { Role } from "./Role";

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

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Role, (role) => role.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn()
  role: Role;

  @OneToMany(() => Experiences, (experience) => experience.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  experiences: Experiences[];

  @OneToMany(() => Educations, (education) => education.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  educations: Educations[];
}
