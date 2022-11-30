const express = require('express');
const cors = require('cors');
const {sequelize} = require('./models')
const router = require('./routes');
require('dotenv').config();

const app = express()

app.use(cors());
app.use(router);

const PORT : number = Number(process.env.PORT);

const start =  async()=> {
    try {
        app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`));
    }
    catch(err){
        console.error(err);
    }
} 

start();