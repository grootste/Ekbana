const jwt = require('jsonwebtoken')


const generateAuthToken= async function(){
    const user = this
    const token = jwt.sign({id:'cat'}, 'thisismynewcourse')
    return token 

}

const auth = async (req, res, next)=>{
     try{
          const token = req.header('Authorization').replace('Bearer ', '')
          const decoded = jwt.verify(token, 'thisismynewcourse')
         
        next()

     } catch (e) {
          res.send('Please authenticate')
     }
}

module.exports = {auth, generateAuthToken}