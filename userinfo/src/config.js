const dotenv = require("dotenv");


dotenv.config();

//server port and host
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

//mongodb configurations
const MONGO_USERNAME = process.env.MONGO_USERNAME || 'superuser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'superuser';
const MONGO_HOST = process.env.MONGO_HOST || 'cluster0.tb6yn.mongodb.net';
const DB_NAME = process.env.DB_NAME;
const MONGO_OPTIONS = {
    //useCreatendex: true, 
   //useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true
}

//mongo object
const MONGO = {
    host : MONGO_HOST,
    username : MONGO_USERNAME,
    password : MONGO_PASSWORD,
    options : MONGO_OPTIONS,
    url : `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${DB_NAME}`
}

//server object
const SERVER = {
    hostname : SERVER_HOSTNAME,
    port : SERVER_PORT   
}

const config ={
    server : SERVER,
    mongo : MONGO
}


module.exports = config;