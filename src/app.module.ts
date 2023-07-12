import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { Todo } from './todos/todo.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      ...databaseConfig,
      models: [Todo],
      autoLoadModels: true,
      synchronize: true,
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
