import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService ],
  exports: [UserService],
})
export class UserModule {}
