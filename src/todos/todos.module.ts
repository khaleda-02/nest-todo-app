import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { todosProviders } from './todo.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [TodosController ],  
  providers: [TodosService , ...todosProviders],
})
export class TodosModule {}
