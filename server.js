// require statments
const express = require('express')
const app = express()

const methodOverride = require('method-override')
const mongoose = require('mongoose')

const eventsController = require('./controllers/events.js')
const futureEventsController = require('./controllers/futureEvents.js')

// middleware
app.use('/events', eventsController)
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

// database connection
const connectionString = 'mongodb://localhost/community_bulletin_board';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose error: ', err);

});

// routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(3000, () => {
    console.log("I'm Listening")
});
