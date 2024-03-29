import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CustomEntity } from "./CustomEntity";
import { UserEntity } from "./User";

@Entity()
export class Experiences extends CustomEntity {
  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @ManyToOne(() => UserEntity, (user) => user.experiences)
  user: UserEntity;
}
