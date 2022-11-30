"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var development = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWD,
    database: process.env.DB_NAME
};
var production = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWD,
    database: process.env.DB_NAME
};
var test = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWD,
    database: process.env.DB_NAME
};
exports.default = { development: development, production: production, test: test };
