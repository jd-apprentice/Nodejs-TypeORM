import { Column, Entity, OneToOne } from "typeorm";
import { UserRole } from "../@types/user.type";
import { MasterEntity } from "./MasterEntity";
import { UserEntity } from "./User";

@Entity()
export class Role extends MasterEntity {
  @OneToOne(() => UserEntity, (user) => user.role)
  user: UserEntity;

  @Column({ default: true })
  isActive: boolean;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  description: UserRole;
}
