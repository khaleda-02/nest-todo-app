import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { todosProviders } from './todo.providers';

@Module({
  controllers: [TodosController],
  providers: [TodosService , ...todosProviders],
})
export class TodosModule {}
