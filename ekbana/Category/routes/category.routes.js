const express = require('express')
const User = require('../model/category.model')
//const auth = require('../middleware/auth')
const {read, readid, create, update, remove} = require('../controllers/category.controller')
const router = new express.Router()


router.get('/api/category', read); 

router.get('/api/category/:id', readid); 

router.post('/api/category', create); 


router.put('/api/category/:id', update); 

router.delete('/api/category/:id', remove); 

module.exports = router