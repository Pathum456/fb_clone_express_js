const express = require('express')
const app = express()
const router = express.Router()

const Post = require('../model/posts')

app.use(express.json())

router.post('/', async (req,res) =>{

    const post = new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body,
    })

    try {
        const response = await post.save()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})


router.put('/:id',async (req,res) =>{

    const post = new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body,
    })



    try {
        const response = await post.save()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})


router.get('/', async (req,res) =>{
    try {
        const posts = await Post.find()
        res.json(posts)
    }catch (err) {
        res.send("Error" +err)
    }
})


router.get('/:id', async (req,res) =>{
    try {
        const posts = await Post.findById(req.params.id)
        res.json(posts)
    }catch (err) {
        res.send("Error" +err)
    }
})

router.get('/users/:userId', async (req, res) => {
    try {
        const post = await Post.find({userId:req.params.userId})
        res.json(post)
    } catch (err) {
        res.send("Error" + err)
    }

})


router.delete('/id:',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        const removePost = await post.remove(post)
        res.json(removePost)
    }catch (err) {
        res.send("Error" +err)
    }

})

module.exports=router