const express = require('express')
const jwt = require('jsonwebtoken')
const {auth, generateAuthToken} = require('../middleware/auth')

const router = new express.Router()

router.get('/apikey/generate', async (req, res)=>{
    try{
    const token = await generateAuthToken()
    console.log(token) 
    res.send(token)
    }catch(e){
    res.send(e)
    }
})

router.get('/apikey/verify',auth ,async (req, res)=>{
    try{
    res.send("Verified")
    }catch(e){
    res.send(e)
    }
})

module.exports = router