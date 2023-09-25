const mongoose=require('mongoose')
const empSchema=mongoose.Schema({
      firstName:String,
      lastName:String,
      age:Number,
      salary:Number
})
const EmpModel=mongoose.model('Employee',empSchema)
module.exports=EmpModel