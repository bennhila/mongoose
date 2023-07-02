const mongoose = require('mongoose')
const connectDB = ()=>{
   
    try {
        mongoose.connect('mongodb://0.0.0.0:27017/workshop') 
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB