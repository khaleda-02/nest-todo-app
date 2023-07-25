import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.model';
import { TODOS_REPOSITORY } from '../common/constants';

@Injectable()
export class TodosService {
  constructor(@Inject(TODOS_REPOSITORY) private readonly todoRepository: typeof Todo) { }


  async create(userId: string, todoObj: CreateTodoDto) {
    return await this.todoRepository.create({ ...todoObj, userId });
  }

  async findAll(user_id : number ): Promise<Todo[]> {
    return await this.todoRepository.findAll({where:{user_id}});
  }
  
  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findByPk(id);
  }

  async update(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<Todo | string> {
    const [affectedRows] = await this.todoRepository.update(
      { ...updateTodoDto },
      { where: { id }, returning: true },
    );

    if (affectedRows == 0) {
      throw new NotFoundException('Todo  not found');
    }
    return `success updated ${id}`;
  }

  async remove(id: number): Promise<string> {
    const numOfDeltedRecords = await this.todoRepository.destroy({ where: { id } });
    if (!numOfDeltedRecords) throw new NotFoundException('Todo  not found');
    return `success deleted ${id}`;
  }
}
