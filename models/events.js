const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');

const eventsSchema = new mongoose.Schema({
    title: {type: String, required:true},
    location: {type: String, required:true},
    body: {type:String, required: true},
    timeStamp: {type: Date},
    cost: {type: String, required: false},
});

const Events = mongoose.model('Events', eventsSchema)

module.exports = Events;