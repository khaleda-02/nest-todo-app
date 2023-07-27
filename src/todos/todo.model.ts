import { User } from './../user/user.model';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, ObjectIdColumn } from 'typeorm';

@Entity({ name:'Todos'})
export class Todo  {
  @ObjectIdColumn()
  id: number;

  @Column()
  deadline: Date;

  @Column()
  catergory: string;

  @Column()
  title: string;

  @Column({ type : String , default: '' })
  discription: string;

  @Column({ type : String, default: false})
  isDone: boolean;

  @ManyToOne(()=> User , (user)=>user.todos)
  @JoinColumn({ name: 'userId' }) 
  user:User ;

  @Column()
  userId: number;
  
  @CreateDateColumn({name : 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name : 'updated_at'})
  updatedAt: Date;

  @Column({name : 'deleted_at'})
  deletedAt: Date;
}
