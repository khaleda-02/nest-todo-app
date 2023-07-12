import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
@Table
export class Todo extends Model {
  @ApiProperty()
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  //!({ defaultValue: Date.now() }) ==> it will gives all new recode , the time of the server started
  //! ({ defaultValue:Date.now() + 10 * 60 * 1000}) ==> it's work , but it's gives you an date as int formate
  @ApiProperty()
  @Column({ defaultValue: () => new Date(Date.now() + 10 * 60 * 1000) })
  deadline: Date;

  @ApiProperty()
  @Column
  catergory: string;

  @ApiProperty()
  @Column
  title: string;

  @ApiProperty()
  @Column({ defaultValue: '' })
  discription: string;

  @ApiProperty()
  @Column({ defaultValue: false })
  isDone: boolean;

  //! default value is just for development
  @ApiProperty()
  @Column({ defaultValue: 'user_id' })
  user_id: string;
}
