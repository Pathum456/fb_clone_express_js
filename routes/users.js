const express = require('express')
const app = express()
const router = express.Router()

const User = require('../model/users')

app.use(express.json())

router.post('/', async (req,res) =>{

    const user = new User({
        firstName:req.body.firstName,
        surName:req.body.surName,
        gender:req.body.gender,
        DOB:req.body.DOB,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email

    })

    try {
        const response = await user.save()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})


router.put('/:id',async (req,res) =>{

    try {

        const user = new User({
            firstName:req.body.firstName,
            surName:req.body.surName,
            gender:req.body.gender,
            DOB:req.body.DOB,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email

        })
        const response = await user.save()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})


router.get('/', async (req,res) =>{

    try {
        const users = await User.find()
        res.json(users)
    }catch (err){
        res.send("Error" +err)
    }
})





router.get('/:id',async(req,res) =>{

    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch (err){
        res.send("Error" +err)
    }

})


router.delete('/:id',async (req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        const response=await user.remove()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }


})

module.exports=router