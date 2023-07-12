import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
@Table
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

  @Column({ defaultValue: false })
  isDone: boolean;

  //! default value is just for development
  @Column({ defaultValue: 'user_id' })
  user_id: string;
}
