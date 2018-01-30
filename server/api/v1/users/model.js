const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 32
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 32
    },
    email:{
        type: String,
        required: true,
         maxlength: 64
    },
    status:{
        type: Boolean,
        default: true
    }
    },{
        timestamps:true
});

module.exports = mongoose.model('user', schema);