const express = require('express')
const Category = require('../model/category.model')
//const auth = require('../middleware/auth')
//const router = new express.Router()





 const read = async function (req, res){ 
    const category = new Category(req.body)
    
    try{
        const category = await Category.find().limit(parseInt(paginate.limit)).skip(parseInt(paginate.skip)).exec()
        res.send(category);
    }catch (e) {
        res.send('Error');
    }
   
}


const readid = async function (req, res){ 
    const _id= req.params.id
    console.log(req.params.id)
    try{
        const category = await Category.findById(_id)

        res.send(category);
    }catch (e) {
        res.send('Error');
    }
   
}


const create = async function (req, res){ 
    const category = new Category(req.body)
    
    try{
        await category.save()
        res.send(category);
    }catch (e) {
       res.send(e);
    }
   
}

const update = async function (req, res){ 
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body,{new : true, runValidators: true})
        console.log(category)
        if(!category){
            return res.send('NOT FOUND')
        }
        res.send('Successfully');
    }catch (e) {
       res.send('Error');
    }
   
}

const remove = async function (req, res){ 
    const _id= req.params.id
    try{
        const category = await Category.findByIdAndDelete(_id)
        if(!category){
            return res.send()
        }
        
        res.send('Successfully');
    }catch (e) {
       res.send('Error');
    }
   
}

module.exports = {read, readid, create, update, remove};