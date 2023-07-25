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

const { DATE} = DataType;
@Table({ underscored: true , paranoid:true , tableName:'Todos'})
export class Todo extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column(DATE)
  deadline: Date;

  @Column
  catergory: string;

  @Column
  title: string;

  @Column({ defaultValue: '' })
  discription: string;

  @Column({ defaultValue: false})
  isDone: boolean;

  @ForeignKey(()=> User)
  @Column
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
