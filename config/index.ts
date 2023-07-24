import * as dotenv from 'dotenv'; 
  
 dotenv.config(); 
  
 import { config as defaultConfig } from './config.development'; 
  
//  const env = process.env.NODE_ENV; 
//  let currentConfig = null; 
//  const filePath = `config.${env}`; 
  
//  try { 
//    // eslint-disable-next-line @typescript-eslint/no-var-requires 
//    const { config } = require(`./${filePath}`); 
//    currentConfig = config; 
//  } catch (error) {} 
  
//  const current = currentConfig || defaultConfig; 
  
//  export default [defaultConfig, current];

// -------------------------------------------------------------------------------------

let currentConfig = null ;
try{
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {config} = require(`./config.${process.env.NODE_ENV}`)
  currentConfig = config;
}catch(err){}
export default [defaultConfig , currentConfig]
//! defaultConfig and currentConfig are functions . 
// so when imoport them , you should run them .