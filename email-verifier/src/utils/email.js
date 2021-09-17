const nodemailer = require('nodemailer');
const config = require('../config/config');
const Token = require('../models/token')

exports.sendEMail = async(user, subject)=>{
    
    try{
        const accessToken = await config.email.authClient.getAccessToken();
        const transport = nodemailer.createTransport({
            service : config.email.service,     
            auth : {...config.email.auth, accessToken}
        });
        console.log(accessToken)
        await new Token({userId : user._id, token : accessToken.token, expireAt : new Date(accessToken.res.data.expiry_date)}).save()

        const msg = `${config.server.clienturl}/user/verify/${accessToken.token}`;
        console.log(msg)
        const mailOptions = {
            from : config.email.auth.user,
            to: user.email,
            subject: subject,
            text: msg
        }
        //console.log(mailOptions)
        await transport.sendMail(mailOptions);
        console.log('email sent')
    }
    catch(err){
        console.log(err)
        return err;
    }
}

