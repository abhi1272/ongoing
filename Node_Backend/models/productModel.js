const mongoose = require('mongoose')

let  Schema = mongoose.Schema;

let productSchema =  Schema({
    ProductName:{
        type:String,
        require:true,
        index:true,
    },
    Packing:String,
    Batch:{
        type:String,
        unique:true
    },
    MRP:Number,
    Expiry:String
})


module.exports =  mongoose.model('products',productSchema)
