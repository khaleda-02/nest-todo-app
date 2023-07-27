import { Todo } from 'src/todos/todo.model';
import { Column, UpdateDateColumn, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}