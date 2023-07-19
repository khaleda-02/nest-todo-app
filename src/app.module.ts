import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { SequelizeModule } from '@nestjs/sequelize';
// import { databaseConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { Todo } from './todos/todo.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host:'127.0.0.1',
      port:3306,
      username: 'root' ,
      password: 'Root#123',
      database:'todos',
      models: [Todo, User ],
      synchronize: true,
      autoLoadModels : true 
    }),
    TodosModule,
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
