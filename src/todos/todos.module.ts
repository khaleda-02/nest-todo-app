import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([Todo])], //AuthModule
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
