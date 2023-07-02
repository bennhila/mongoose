const person = require('../models/personShema')
const mongoose = require('mongoose')
const personController = {
    get:async(req,res)=>{
        const persons=await person.find()
        res.send(persons)
    },
    add:async(req,res)=>{
       await person.create(req.body)
       res.send('added')
    },
    getByFoods:async(req,res)=>{
      
            const persons=await person.findOne({ favoriteFoods :  req.body.favoriteFoods })
            res.send(persons)
    },
    getById:async(req,res)=>{
      
            const persons=await person.find({ _id :  req.body._id })
            res.send(persons)
    },
    pushHamburger:async(req,res)=>{
      await person.updateOne({ _id :  req.body._id },{$push:{favoriteFoods:'hamburger'}})
        res.send('person update')
    },
    changeAge:async(req,res)=>{
        await person.updateOne({name:req.body.name},{age:20})
          res.send('person update')
      },
      deleteById:async(req,res)=>{
        await person.findOneAndRemove({_id :  req.body._id})
          res.send('person delete')
      },
      deleteByName:async(req,res)=>{
        await person.deleteMany({name:req.body.name})
          res.send('person delete')
      },
      
    }
module.exports = personController