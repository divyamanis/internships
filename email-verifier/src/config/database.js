const mongoose = require('mongoose');
const config = require('./config');
module.exports = async function connection(){
    try{
        await mongoose.connect(config.mongo.url, config.mongo.options);
        console.log('Connected to DB');
    }
    catch(err){
        console.log(err)
    }
}