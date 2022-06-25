import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CustomEntity } from "./CustomEntity";
import { UserEntity } from "./User";

@Entity()
export class Experiences extends CustomEntity {
  @Column()
  id: string;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @ManyToOne(() => UserEntity, (user) => user.experiences, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: UserEntity;
}
