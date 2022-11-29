require('dotenv').config();

const SequelizeAuto = require('sequelize-auto')
const auto = new SequelizeAuto('vary-nodejs-dev', 'varyemail', 'gOffg-U6ON7ey4tbkgdEyA3MsNEVVURBQ5y3SjM3U3Q', {
   host: process.env.DB_HOST, 
   port: process.env.DB_PORT,
   dialect: 'postgres'
})

auto.run()