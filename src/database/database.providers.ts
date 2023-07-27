import { DATA_SOURCE } from '../common/constants'; 
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Todo } from '../todos/todo.model';
import { User } from '../user/user.model';
import { DataSource } from 'typeorm';
import dataSource from '../../config/migrate';


export const dbProviders = [
  {
    provide:DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      // const config = configService.get('database');
      // const dataSource = new DataSource({...config });
      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];

