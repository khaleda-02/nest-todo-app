import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async create(todoObj: CreateTodoDto) {
    //TODO : is checking of todo existing for this user needed ?
    return await this.todoModel.create({ ...todoObj });
  }

  async findAll(): Promise<Todo[]> {
    //Todo : validate the user_id and return his todos .
    return await this.todoModel.findAll();
  }
  async findOne(id: number): Promise<Todo> {
    return await this.todoModel.findByPk(id);
  }

  //Todo => return the updated record
  async update(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): Promise<Todo | string> {
    const [affectedRows] = await this.todoModel.update(
      { ...updateTodoDto },
      { where: { id: id }, returning: true },
    );
    //! returning => ture -> will return the affected recodes , false -> just return the number of reacrd that affected

    if (affectedRows == 0) {
      throw new NotFoundException('Todo  not found');
    }
    return `success updated ${id}`;
  }

  async remove(id: number): Promise<string> {
    const numOfDeltedRecords = await this.todoModel.destroy({ where: { id } });
    if (!numOfDeltedRecords) throw new NotFoundException('Todo  not found');
    return `success deleted ${id}`;
  }
}
