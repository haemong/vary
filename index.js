require('dotenv').config();

const SequelizeAuto = require('sequelize-auto')
const auto = new SequelizeAuto('vary_nodejs_dev', 'simchaewon', '123123', {
   host: process.env.DB_HOST, 
   port: process.env.DB_PORT,
   dialect: 'postgres'
})

auto.run()