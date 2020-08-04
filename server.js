//--------------------------require statments
const express = require("express")
const ejsLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override")
const app = express()
const router = express.Router()
const eventsController = require('./controllers/events')
const futureEventsController = require('./controllers/futureEvents')
require('./db/db')
app.use(express.static(__dirname + '/style'));

//--------------------------middleware
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

//--------------------------routes
app.get('/', (req, res) => {
    res.render('home')
})

// ----------Events Routes
app.use('/events', eventsController)
app.use('/futureEvents', futureEventsController)


app.listen(3000, () => {
    console.log("Events on port 3000")
});
