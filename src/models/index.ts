'use strict';

import { Sequelize } from "sequelize";
import  config  from "../config/config";

export const sequelize = new Sequelize(
  config.test.database || 'vary_nodejs_dev',
  config.test.username as string,
  config.test.password,
  {
    host:config.test.host,
    dialect: 'postgres'
  },
)