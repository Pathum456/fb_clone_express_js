const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',userSchema)