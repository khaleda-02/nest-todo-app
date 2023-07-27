import { User } from './../user/user.model';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity({ name:'Todos'})
export class Todo  {
  @PrimaryGeneratedColumn()
  @Column()
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
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
