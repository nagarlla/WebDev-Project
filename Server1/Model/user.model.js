const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    Name:String,
    Dept:String,
    RegNo:String,
    password:String
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel