const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) =>{
    app.get('/users', async (req,res)=>{
        res.send('Success');
    });

    app.post('/api/users', async (req,res)=>{
        const { code, vnName, enName, startDate, contractType} = req.body;
        const user = await new User({
            code,
            vnName,
            enName,
            startDate,
            contractType
        }).save();
        res.send(user);
    })
}
