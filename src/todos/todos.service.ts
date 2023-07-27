import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.model';
import { TODOS_REPOSITORY } from '../common/constants';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @Inject(TODOS_REPOSITORY)
    private readonly todoRepository: Repository<Todo>,
  ) {}


  async create(userId:number, todoObj: CreateTodoDto) {
    return await this.todoRepository.save({ ...todoObj, userId });
  }

  async findAll(userId : number ): Promise<Todo[]> {
    return await this.todoRepository.find({where:{userId}});
  }
  
  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findOne({where:{id}});
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo | string> {
    const todo = await this.todoRepository.findOne({where:{id}});
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    Object.assign(todo, updateTodoDto);

    await this.todoRepository.save(todo);
    return `Success updated ${id}`;
  }

  async remove(id: number): Promise<string> {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Todo not found');
    }

    return `Success deleted ${id}`;
  }
}
