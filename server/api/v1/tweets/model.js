const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    content:{
        type: String,
        required: true,
        maxlength: 280
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    location:{
        type:String,
        required: true,
        maxlength: 64
    }
    },{
        timestamps:true
});

module.exports = mongoose.model('tweet', schema);