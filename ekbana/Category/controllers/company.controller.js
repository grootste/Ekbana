const express = require('express')
const Company = require('../model/company.model')
//const auth = require('../middleware/auth')
//const router = new express.Router()





 const read = async function (req, res){ 
    const company = new Company(req.body)
    let paginate= {
        limit: req.query.limit,
        skip : req.query.skip
    }
    
    try{
        const company = await Company.find().limit(parseInt(paginate.limit)).skip(parseInt(paginate.skip)).exec()
        res.send(company);
    }catch (e) {
        res.send('Error');
    }
   
}


const readid = async function (req, res){ 
    const _id= req.params.id
    console.log(req.params.id)
    
    try{
        const company = await Company.findById(_id)
        res.send(company);
    }catch (e) {
        res.send('Error');
    }
   
}


const create = async function (req, res){ 
    const company = new Company(req.body)
    
    try{
        await company.save()
        res.send(company);
    }catch (e) {
       res.send(e);
    }
   
}


const update = async function (req, res){ 
    try{
        const compnay = await Company.findByIdAndUpdate(req.params.id, req.body,{new : true, runValidators: true})
        console.log(compnay)
        if(!compnay){
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
        const compnay = await Company.findByIdAndDelete(_id)
        if(!compnay){
            return res.send()
        }
        
        res.send('Successfully');
    }catch (e) {
       res.send('Error');
    }
   
}

module.exports = {read, readid, create, update, remove};