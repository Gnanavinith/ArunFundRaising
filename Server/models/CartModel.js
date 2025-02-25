const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    title:{type:String, required:true},
    image:{type:String},
    documentimage:{type:String},
    about1:{type:String ,required:true},
    about2:{type:String ,required:true},
    companytype:{type:String ,required:true},
    amount:{type:String,required:true},
})

module.exports = mongoose.model('Cart',CartSchema);