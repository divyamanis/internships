const dotenv = require("dotenv");
const { google } = require("googleapis");

dotenv.config();

//server port and host
const SERVER_PORT = process.env.SERVER_PORT || 1337;
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
    port : SERVER_PORT,
    baseurl : process.env.BASE_URL,
    clienturl : process.env.CLIENT_URL
}
//oauth client
const OAUTH2CLIENT = new google.auth.OAuth2(process.env.EMAIL_CLIENT_ID, process.env.EMAIL_CLIENT_SECRET, process.env.EMAIL_REDIRECT_URI);
OAUTH2CLIENT.setCredentials({refresh_token : process.env.EMAIL_REFRESH_TOKEN })

//email object
const EMAIL_CONFIG = {
    authClient : OAUTH2CLIENT,
    service : process.env.EMAIL_SERVICE,
    auth : {
        type : process.env.EMAIL_AUTHORIZATION_TYPE,
        user : process.env.EMAIL_AUTHORIZED_USER,
        clientId : process.env.EMAIL_CLIENT_ID,
        clientSecret : process.env.EMAIL_CLIENT_SECRET,
        refreshToken :process.env.EMAIL_REFRESH_TOKEN
    }
}
const config ={
    server : SERVER,
    mongo : MONGO,
    email : EMAIL_CONFIG
}


module.exports = config;