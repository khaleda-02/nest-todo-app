import { config as configDev } from '../config/config.development';
import { config as configTest } from '../config/config.test';

export default process.env.NODE_ENV === 'development' ?   configDev: configTest;
