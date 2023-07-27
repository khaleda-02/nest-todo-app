import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.model';

@Module({
  imports:[TypeOrmModule.forFeature([Todo])],
controllers: [TodosController],
  providers: [TodosService ,],
})
export class TodosModule {}
