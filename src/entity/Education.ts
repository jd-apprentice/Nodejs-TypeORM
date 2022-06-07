import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Education {
  @PrimaryGeneratedColumn("uuid")
  education_id: string;

  @Column()
  school: string;

  @Column()
  degree: string;

  @Column()
  from: Date;

  @Column()
  to: Date;
}
