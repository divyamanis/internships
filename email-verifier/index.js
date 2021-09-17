const express = require('express');
const config = require('./src/config/config')
const router = require('./src/routes/users')
const connection = require('./src/config/database')
const app = express();
(async () => await connection())();
app.use(express.json())
app.use(express.urlencoded({urlencoded : true}))
app.use('/',router)
app.listen(config.server.port,(err)=>{
    if(err)
        console.log('Cant start server')
    else
        console.log('Server started')
});