import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.model';
import { Todo } from '../todos/todo.model';

@Module({
  imports: [
  TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        prot :3306,
        database:'todo',
        username:'root',
        password:'Root#123',
        entities:[User, Todo]
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
