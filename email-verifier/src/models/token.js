const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const TokenSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      expireAt : {
          type : Date,
          required : true
      }
},
{timestamps : true});

TokenSchema.index({expireAt : 1}, {expireAfterSeconds : 0})


module.exports = mongoose.model('Token', TokenSchema);