const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');

const futureSchema = new mongoose.Schema({
    title: {type: String, required:true},
    location: {type: String, required:true},
});

const Future = mongoose.model('Future', futureSchema)

module.exports = Future;