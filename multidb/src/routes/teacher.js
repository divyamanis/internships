const express = require('express');
const teacherRouter = express.Router();
const Teacher = require('../models/teacher');
teacherRouter.get('/',async (req,res)=>{
    const teachers = await Teacher.find();
    return res.send({data : teachers})
})
teacherRouter.post('/',async(req,res)=>{
    const teachers = [
        {
            name : "Teacher1",
            teacherId : "T01",
            
        },
        {
            name : "Teacher2",
            teacherId : "T02",
            
        },
        {
            name : "Teacher3",
            teacherId : "T03",
            
        }
    ]
    await Teacher.create(teachers);
    res.send({msg : 'inserted'})
});


module.exports = teacherRouter