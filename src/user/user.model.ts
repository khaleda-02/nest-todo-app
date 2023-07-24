import { Column, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Todo } from '../todos/todo.model';

@Table({
  tableName : 'users'
})
export class User extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  //? @Unique ==> no user with many username and one email (dpend on business requirements)
  @Column({allowNull : false})
  email: string;

  @Unique
  @Column({allowNull : false})
  username: string;

  @Column({allowNull : false})
  password: string;

  @HasMany(()=>Todo)
  todos : Todo[];

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
 