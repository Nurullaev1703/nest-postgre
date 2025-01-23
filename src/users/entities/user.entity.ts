import { AbstractEntity } from "src/abstractions/abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  username: string;

  @Column()
  password: string;
}
