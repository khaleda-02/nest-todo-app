import config from '../config';

let databaseConfig;

// config.forEach(
//   (value) =>
//     (databaseConfig = value().database ? value().database : databaseConfig),
// );

// -------------------------------------------------------------------------------------

config.forEach(con=>(databaseConfig = con().database ?con().database : databaseConfig ))
module.exports = databaseConfig;
// Config => [default(developemnnt) , current (env NODE_ENV)]
// First set the databaseConfig with default(developemnnt) 
// And then check the currentConfig from the env , and set the databaseConfig with it if founded.