const express = require('express');
const route = express.Router();
const Cart = require("../models/CartModel")




//---------------POST--------------------

route.post("/",async(req,res)=>{

    const {title,image,documentimage,about1,about2,companytype,amount} = req.body
    

    try{
        const posting =  await new Cart ({title,image,documentimage,about1,about2,companytype,amount})
        const PostingComplete = await posting.save()
        res.status(201).json(PostingComplete)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:error.message})  
    }
  
})

//----------------Get Overall--------------------

route.get('/',async(req,res)=>{

   try{
     const getPost = await Cart.find();
     res.json(getPost)
   } 
   catch(error){
    console.log(error)
    res.status(500).json({message:error.message})
   } 
  
})


// ----------------Get Single ID--------------------

route.get('/:id',async(req,res)=>{
    try{
        const getPostId = await Cart.findById(req.params.id);
        if(!getPostId){
           return res.status(404).json({message:"NOT FOUND"})
        }
        res.json(getPostId);
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
})

//----------------UPDATE--------------------
route.put("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const post = await Cart.findById(id)
        if(!post){
            res.status(404).json({message:"NOT FOUND"})
        }
        post.title = req.body.title || post.title;
        post.image = req.body. image|| post.image;
        post.documentimage= req.body.documentimage || post.documentimage;
        post.about1 = req.body.about1 ||  post.about1;
        post.about2 = req.body.about2 || post.about2;
        post.companytype = req.body.companytype || post.companytype;
        post.amount = req.body.amount || post.amount;
        
        const UpdatedPost = await post.save();
        res.json(UpdatedPost);
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:error.message});
    }
})

//----------------DELETE--------------------
route.delete('/:id',async(req,res)=>{
    try{
     const id = req.params.id   
     await Cart.findByIdAndDelete(id)
     res.json({message:"Post deleted"})
    }
    catch(error){
    res.status(500).json({message:error.message})
    }
})

module.exports = route