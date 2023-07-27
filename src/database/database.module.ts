import { Module } from '@nestjs/common';
import { dbProviders } from './database.providers';
@Module({
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DatabaseModule {}