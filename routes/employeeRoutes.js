const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
    app.get('/api/users', async (req, res) => {
        const users = await User.find();
        res.send(users);
    });

    app.post('/api/users', async (req, res) => {
        const {code, vnName, enName, startDate, contractType} = req.body;
        try {
            const user = await new User({
                code,
                vnName,
                enName,
                startDate,
                contractType
            }).save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
}
