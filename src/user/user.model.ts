import { Column, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  //? @Unique ==> no user with many username and one email (dpend on business requirements)
  @Column
  email: string;

  @Unique
  @Column
  username: string;

  @Column
  password: string;
}
