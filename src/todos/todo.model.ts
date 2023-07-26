import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  DataType
} from 'sequelize-typescript';
import { User } from './../user/user.model';

const { DATE, STRING , NUMBER}  = DataType;
@Table({ underscored: true , paranoid:true , tableName:'Todos'})
export class Todo extends Model {
  @PrimaryKey
  @Column(NUMBER)
  id: number;

  @Column(DATE)
  deadline: Date;

  @Column(STRING)
  catergory: string;

  @Column(STRING)
  title: string;

  @Column({ type : STRING , defaultValue: '' })
  discription: string;

  @Column({ type : STRING , defaultValue: false})
  isDone: boolean;

  @ForeignKey(()=> User)
  @Column(NUMBER)
  userId: number;

  @BelongsTo(()=>User)
  user:User ;
  
  @Column(DATE)
  createdAt: Date;

  @Column(DATE)
  updatedAt: Date;

  @Column(DATE)
  deletedAt: Date;
}
