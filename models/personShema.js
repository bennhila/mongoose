const mongoose = require('mongoose')
const personShema= mongoose.Schema({
    name: String,
    age:Number,
    favoriteFoods:Array
})
const Person = mongoose.model('persons',personShema)
module.exports= Person 