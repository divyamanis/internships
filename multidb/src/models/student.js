const mongoose = require('mongoose')
const { studentConnection } = require('../database')
const Schema  = mongoose.Schema

const StudentSchema = Schema({
    name : {
        type : String,
        required : true
    },
    studentId : {
        type : String,
        required : true,
        unique : true
    },
    class : {
        type : Number,
        required : true
    }
},
{timestamps : true})

module.exports = studentConnection.model('Teacher',StudentSchema)