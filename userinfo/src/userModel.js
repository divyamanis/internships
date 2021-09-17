const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    city : {
        type :String
    },
    street : String,
    houseNumber : String
})

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    income : {
        type : Number
    },
    marital_status : {
        type : String,
        enum : ['UNMARRIED', 'MARRIED','DIVORCED','WIDOW']
    },
    registrationNumber : {
        type : String
    },
    address : AddressSchema
})



exports.User = mongoose.model("User",UserSchema);