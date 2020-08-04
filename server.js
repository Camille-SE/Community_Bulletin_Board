//--------------------------require statments
const express = require("express")
const methodOverride = require("method-override")
const session = require('express-session')
const passport = require("passport")
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts')
const app = express()
const router = express.Router()


// -----------Controllers
const eventsController = require('./controllers/events')
const futureEventsController = require('./controllers/futureEvents')


// ---DataBase
require('./db/db')

// ----parse data
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

// --StyleCSS
app.use(express.static(__dirname + '/style'));

//--------------------------routes
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// ----------Events Routes
app.use('/events', eventsController)
app.use('/futureEvents', futureEventsController)

app.listen(3000, () => {
    console.log("Events on port 3000")
});
