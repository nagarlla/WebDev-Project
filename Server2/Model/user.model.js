const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    Dept:String,
    RegNo:String,
    Gallery:String,
    SeatNo:String
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel