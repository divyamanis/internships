const User = require('../models/user');
const config = require('../config/config');
const {sendEMail} = require('../utils/email')

exports.login = async(req, res, next)=>{
    try{
        const user = await User.findOne({email : req.body.email})
        if(user){
            if(!user.authenticate(req.body.password)){
                return res.status(401).send({msg : 'Wrong password'})
            }
            else if(!user.isVerified){
                return res.status(401).send({msg : 'Email not verified. Please verify your email'})
            }
            else{
                return res.status(401).send({msg : 'User logged in'})
            }
        }
    }
    catch(err){
        return res.status(500).send({msg : err.message})
    }
}
exports.signup = async (req, res,next)=>{
    try{
        const user = await User.findOne({email : req.body.email})
        if(user){
            return res.status(400).send({msg : "Email already associated with another acoount"})
        }
        else{
            
            const _user = new User({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
            _user.save()
            .then(()=>{
                console.log('user saved');
                sendEMail(_user, "Verify Email")
                .then(()=>res.send({msg : "Email sent"}))
            })
        }
    }
    catch(err){
        return res.status(500).send({msg : err.msg})
    }
}
