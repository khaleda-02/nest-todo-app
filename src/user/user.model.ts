import { Todo } from '../todos/todo.model';
import { Column, UpdateDateColumn, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, Entity ,ObjectIdColumn} from 'typeorm';
@Entity({ name: 'Users' })
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  email: string;

  @Column({unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @CreateDateColumn({name : 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name : 'updated_at'})
  updatedAt: Date;

  @Column({name : 'deleted_at'})
  deletedAt: Date;
}