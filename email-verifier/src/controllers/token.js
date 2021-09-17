const User = require('../models/user');
const Token = require('../models/token');
exports.verifyAccount = async(req, res) =>{
    try{
        const token = await Token.findOne({token : req.params.token})
        console.log(req.params.token)
        if(!token)
         return res.status(400).send({msg : 'Your verification link expired'})
        else{
            const user = await User.findOne({_id : token.userId, email : req.params.email});
            if(!user){
                return res.status(400).send({msg : "Cant find user. Please signup"})
            }
            else if(user.isVerified){
                return res.status(200).send({msg : 'User already verified. Please login'})
            }
            else{
                user.isVerified = true;
                user.save().then(()=>{console.log('user saved')})
                //await User.updateOne({ _id: user._id, verified: true });
                await Token.findByIdAndRemove(token._id);
            }
        }
    }
    catch(err){
        return res.status(500).send({msg : err.msg})
    }
}
exports.resendLink = async(req, res, next) =>{
    try{
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(400).send({msg : "Cant find user with this email"})
        }
        else if(user.isVerified){
            return res.status(200).send({msg : 'User already verified. Please login'})
        }
        else{
            //const msg = `${config.server.baseurl}/user/verify/${user._id}/`;
            await sendEMail(user, "Verify Email");
            res.send({msg : 'An email sent to your account. Please verify'})
        }
    }
    catch(err){
        return res.status(500).send({msg : err.msg})
    }
}