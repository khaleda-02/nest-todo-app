import { Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Todo } from '../todos/todo.model';

const {DATE } = DataType;

@Table({underscored : true , paranoid : true , tableName:'Users'})
export class User extends Model {
  @PrimaryKey
  @Column 
  id: number;

  @Column
  email: string;

  @Unique
  @Column
  username: string;

  @Column
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
 