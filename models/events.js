const mongoose = require('mongoose');

const eventsSchema= new mongoose.Schema({
    title: {type: String, required:true},
    location: {type: String, required:true},
    date: {type: String, required:true},
});

const Today = mongoose.model('Today', eventsSchema)

module.exports = Today;