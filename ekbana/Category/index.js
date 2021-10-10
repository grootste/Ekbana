const express = require('express')


require('./config/database');
const ApiRoutes = require('./routes/category.routes');
const CompanyRoutes = require('./routes/company.routes');
const AuthRoutes = require('./routes/auth.routes');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

// Add the apiRoutes stack to the server
app.use(ApiRoutes);
app.use(CompanyRoutes);
app.use(AuthRoutes);

app.listen(port, () =>{
  console.log('Server is up on ' + port)
})


