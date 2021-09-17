const express = require('express');
const Student = require('../models/student');
const studentRouter = express.Router();
studentRouter.post('/',async(req,res)=>{
    const students = [
        {
            name : "Student1",
            studentId : "S01",
            class : 1
        },
        {
            name : "Student2",
            studentId : "S02",
            class : 1
        },
        {
            name : "Student3",
            studentId : "S03",
            class : 1
        }
    ]
    const s = await Student.create(students);
    res.send(s)

});

studentRouter.get('/', async (req,res)=>{
    const students = await Student.find();
    res.send({data : students})
})

module.exports = studentRouter