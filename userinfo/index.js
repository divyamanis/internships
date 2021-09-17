const express = require('express');
const config = require('./src/config')
const router = require('./src/userRoute')
const connection = require('./src/database')
const app = express();
(async () => await connection())();
app.use(express.json())
app.use(express.urlencoded({urlencoded : true}))
app.use('/api/upcloud/users',router)
app.listen(config.server.port,(err)=>{
    if(err)
        console.log('Cant start server')
    else
        console.log('Server started')
});