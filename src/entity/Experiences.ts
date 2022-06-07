import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Experiences {
  @PrimaryGeneratedColumn("uuid")
  experience_id: string;

  @Column()
  company: string;

  @Column()
  title: string;

  @Column()
  from: Date;

  @Column()
  to: Date;
}
