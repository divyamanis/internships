const express = require('express');
const app = express();
const studentRouter = require('./routes/student');
const config = require('./config');
const teacherRouter = require('./routes/teacher');
app.use(express.json());

app.use('/students',studentRouter)
app.use('/teachers',teacherRouter)
app.listen(config.server.port, ()=>{console.log('Server started')})