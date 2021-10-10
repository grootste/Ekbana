const mongoose = require ('mongoose')
const validator = require('validator')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')



const categorySchema = new mongoose.Schema({
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
    }
   },
    { timestamps: true }, 
    { versionKey: false })


const Category =mongoose.model('Category', categorySchema)


module.exports = Category
