const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const CartRoute = require("./router/CartRouter");
const Register = require("./models/LoginModel");
const bcrypt = require("bcrypt");


//Server Created
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Database Connections
mongoose.connect("mongodb://localhost:27017/funding")
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log("DB error",err))


//Router Connected Cart Data
app.use("/api/carts",CartRoute)

//----------------Login---------------
app.post("/register",(req,res)=>{
   const {name,email,password} = req.body;
   bcrypt.hash(password,10)
   .then((hash) => {
        Register.create({name:name,email:email,password:hash})
        .then(employee => res.json(employee))
        .catch(err => res.json(err))
    })
})

app.post("/login", (req,res)=>{
    const {email,password} = req.body;
    Register.findOne({email:email})
    .then((user) => {
        if(user){
           bcrypt.compare(password,user.password,(err,response) => {
           if(response){
            res.json("success")
           } 
           else{
            res.json("Invalid Password")
           }
           })
        }
        else{
          res.json("No record existed");
        }
    })
})


// PORT Declaration
const PORT = process.env.PORT || 7000

// Server Started
app.listen(7000,()=>{
    console.log("Server Running")
})
