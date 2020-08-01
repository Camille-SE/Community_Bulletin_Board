const mongoose = require('mongoose');
const Events = require('./events')

const futureSchema = new mongoose.Schema({
    title: {type: String, required:true},
    location: {type: String, required:true},
    timeStamp: {type: Date},
    cost: {type: String, required: false},
    body: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }]
});

const Future = mongoose.model('Future', futureSchema)

module.exports = Future;