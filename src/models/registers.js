const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conformpassword:{
        type:String,
        require:true
    }
})


const Register = new mongoose.model('Register',employeeSchema)
module.exports = Register