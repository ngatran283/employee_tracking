const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./models/User');
require('./models/History');
const app = require('express')();

mongoose.connect(keys.mongoURI,{useNewUrlParser:true})
app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

require('./routes/employeeRoutes');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
