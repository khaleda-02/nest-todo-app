import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.model';
import { JwtGuard } from './../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() CreateTodoDto: CreateTodoDto, @Request() req) {
    console.log('user from req , in todo controller ', req.user);
    const { user_id } = req.user;
    return this.todosService.create(user_id, CreateTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.todosService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.todosService.remove(+id);
  }
}
