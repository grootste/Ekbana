const mongoose = require ('mongoose')
const validator = require('validator')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')



const companySchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     trim: true,
    //     unique: true
    // },
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: false
    },
    status: {
        type: Boolean,
        trim: true,
        required: true
    }
   },
    { timestamps: true }, 
    { versionKey: false })


const Company =mongoose.model('Company', companySchema)


module.exports = Company
