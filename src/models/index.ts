import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

export const sequelize = new Sequelize(
  config.database || 'vary_nodejs_dev',
  config.username as string,
  config.password,
  {
    host:config.test.host,
    dialect:'postgres'
  },
)