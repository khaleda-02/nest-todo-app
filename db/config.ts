import config from '../config'

let databaseConfig;

config.forEach((value)=>(databaseConfig = value().database? value().database : databaseConfig))