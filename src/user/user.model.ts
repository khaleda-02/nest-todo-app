import { Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Todo } from '../todos/todo.model';

const {DATE, NUMBER ,STRING } = DataType;

@Table({underscored : true , paranoid : true , tableName:'Users'})
export class User extends Model {
  @PrimaryKey
  @Column(NUMBER)
  id: number;

  @Column(STRING)
  email: string;

  @Unique
  @Column(STRING)
  username: string;

  @Column(STRING)
  password: string;

  @HasMany(()=>Todo)
  todos : Todo[];

  @Column(DATE)
  createdAt: Date;

  @Column(DATE)
  updatedAt: Date;

  @Column(DATE)
  deletedAt: Date;
}
 