const mongoose = require('mongoose')
const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    joiningDate:{
        type:Date,
        required:true
    }
},{timestamps:true})

const Emp = mongoose.model('emp',empSchema)
module.exports = Emp