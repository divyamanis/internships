const express = require('express');
const { User } = require('./userModel');
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const users = await User.find({},{_id:0,name:1,age:1,email:1})
        return res.status(200).send({data : users})
    }
    catch(err){
        return res.status(400).send({msg : err.message})
    }
    
})
router.post('/',async(req, res)=>{
    const users = [
        {
            name : 'user1',
            age : 12,
            income : 5000,
            marital_status : 'UNMARRIED',
            registrationNumber : 'R01',
            email : 'user1@gmail.com',
            address : {
                city : 'ABC',
                street : 'XYZ',
                houseNumber : 'H012'
            }
        },
        {
            name : 'user2',
            age : 32,
            email : 'user2@gmail.com',
            income : 50000,
            marital_status : 'MARRIED',
            registrationNumber : 'R06',
            address : {
                city : 'DEF',
                street : 'XY',
                houseNumber : 'H01'
            }
        }
    ]
    try{
        await User.create(users)
        return res.status(200).send({msg : 'Users inserted'})
    }
    catch(err){
        return res.status(400).send({msg : err.message})
    }
})

module.exports = router;