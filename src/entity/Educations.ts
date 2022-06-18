import { Column, Entity, ManyToOne } from "typeorm";
import { CustomEntity } from "./CustomEntity";
import { UserEntity } from "./User";

@Entity()
export class Educations extends CustomEntity {
  @Column()
  school: string;

  @Column()
  degree: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @ManyToOne(() => UserEntity, (user) => user.educations, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: UserEntity;
}
