/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as dotenv from 'dotenv'; 
  
dotenv.config();   
import { config as defaultConfig } from './config.development'; 
  
let currentConfig = null ;
try{
  const {config} = require(`./config.${process.env.NODE_ENV}`)
  currentConfig = config;
}catch(err){}
export default [defaultConfig , currentConfig]


// make a file that return a data source , and test the migration:run if it's run :
//! create a config foleder from scratch like the video 
//? update dbProvider 
//! make the index in config return a datasource , for 