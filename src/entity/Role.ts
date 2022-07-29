import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { UserRole } from "../@types/user.type";
import { CustomEntity } from "./CustomEntity";
import { UserEntity } from "./User";

@Entity()
export class Role extends CustomEntity {
  @OneToOne(() => UserEntity, (user) => user.role, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  user: UserEntity;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  description: UserRole;
}
