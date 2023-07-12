import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Todo } from './todo.model';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiCreatedResponse({ description: 'create todo .', type: Todo })
  @ApiBadRequestResponse({ description: 'bad request ' })
  @ApiUnauthorizedResponse({ description: 'unauthorized .' })
  @Post()
  create(@Body() CreateTodoDto: CreateTodoDto) {
    return this.todosService.create(CreateTodoDto);
  }

  @ApiOkResponse({ description: 'get todos .', type: [Todo] })
  @ApiUnauthorizedResponse({ description: 'unauthorized .' })
  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @ApiOkResponse({ description: 'get todo by id  .', type: Todo })
  @ApiUnauthorizedResponse({ description: 'unauthorized .' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.todosService.findOne(+id);
  }

  @ApiOkResponse({ description: 'update todo by id  .', type: String })
  @ApiUnauthorizedResponse({ description: 'unauthorized .' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @ApiOkResponse({ description: 'remove todo by id  .', type: String })
  @ApiUnauthorizedResponse({ description: 'unauthorized .' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.todosService.remove(+id);
  }
}
