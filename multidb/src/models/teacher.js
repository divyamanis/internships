const mongoose = require('mongoose')
const { teacherConnection } = require('../database')
const Schema  = mongoose.Schema

const TeacherSchema = Schema({
    name : {
        type : String,
        required : true
    },
    teacherId : {
        type : String,
        required : true,
        unique : true
    }
},
{timestamps : true})

module.exports = teacherConnection.model('Teacher',TeacherSchema)