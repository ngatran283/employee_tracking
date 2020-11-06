const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
require('./models/User');
require('./models/History');
const bodyParser = require('body-parser');
const app = require('express')();
app.use(bodyParser.json());
const User = mongoose.model('users');

mongoose.connect(keys.mongoURI,{useNewUrlParser:true})
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

require('./routes/employeeRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
