const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
      firstName:String,
      lastName:String,
      age:Number
})
const UserModel=mongoose.model('User',userSchema)
module.exports=UserModel