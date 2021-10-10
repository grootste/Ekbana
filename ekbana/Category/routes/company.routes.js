const express = require('express')
const User = require('../model/company.model')
//const auth = require('../middleware/auth')
const {read, readid, create, update, remove} = require('../controllers/company.controller')
const router = new express.Router()


router.get('/api/company', read); 

router.get('/api/company/:id', readid); 

router.post('/api/company', create); 


router.put('/api/company/:id', update); 

router.delete('/api/company/:id', remove); 

module.exports = router