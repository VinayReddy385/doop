const express=require('express')
const router=express.Router()
const UserModel=require('../Model/user.model')
router.post('/',(req,res)=>{
     let newEmp=new UserModel({
           firstName:req.body.firstName,
           lastName:req.body.lastName,
           age:req.body.age
     })
     newEmp.save().then(response=>{
           res.send(response)///
     }).catch(err=>{
           res.send(err)
     })
})
router.get('/',(req,res)=>{
     UserModel.find().then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
})
 router.put('/:id',(req,res)=>{
     const idQuery=req.params.id
     UserModel.findByIdAndUpdate(idQuery,{$set:req.body}).then((response)=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
 })
 router.delete('/:id',(req,res)=>{
     const idQuery=req.params.id
     UserModel.findByIdAndDelete(idQuery).then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })


 })
 module.exports=router