import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

import configFile from '../config'
import { loggerMiddleware } from './common/middlewares/logger.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true , load:configFile}),
    DatabaseModule,
    TodosModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure( consumer: MiddlewareConsumer ) {
   consumer.apply(loggerMiddleware).forRoutes('*');
  }
}
