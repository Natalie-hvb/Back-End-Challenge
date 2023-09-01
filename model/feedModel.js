const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const feedSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => moment(createdAt).format('MM/DD/YYYY') // Format createdAt with only the date
    }

},{ timestamps: true});


module.exports = mongoose.model('Feed', feedSchema);