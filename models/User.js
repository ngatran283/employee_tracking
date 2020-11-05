const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    code: String,
    vnName: String,
    enName: String,
    startDate: Date,
    contractType: String
});

mongoose.model('users',userSchema);
