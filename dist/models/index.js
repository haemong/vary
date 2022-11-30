'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var config_1 = require("../config/config");
exports.sequelize = new sequelize_1.Sequelize(config_1.default.test.database || 'vary_nodejs_dev', config_1.default.test.username, config_1.default.test.password, {
    host: config_1.default.test.host,
    dialect: 'postgres'
});
