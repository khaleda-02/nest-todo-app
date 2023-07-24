import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './../user/user.model';
@Table({tableName : 'todos'})
export class Todo extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  //!({ defaultValue: Date.now() }) ==> it will gives all new recode , the time of the server started
  //! ({ defaultValue:Date.now() + 10 * 60 * 1000}) ==> it's work , but it's gives you an date as int formate
  @Column({ defaultValue: () => new Date(Date.now() + 10 * 60 * 1000) })
  deadline: Date;

  @Column
  catergory: string;

  @Column
  title: string;

  @Column({ defaultValue: '' })
  discription: string;

  @Column({ defaultValue: false , field : 'is_done'})
  isDone: boolean;

  @ForeignKey(()=> User)
  @Column
  user_id: string;

  @BelongsTo(()=>User)
  user:User ;
  
}
