const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let emailSchema = Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        index:true
    },
    mobileNumber:{
        type:Number,
        require:true
    },
    message:{
        type:String
    },
    createdTime:String
})

module.exports = mongoose.model('EmailModel',emailSchema)
