//----------------Require Statments
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
const sessionsController = require('./controllers/sessions')


// ---DataBase
require('./db/db')

// ---MiddleWare
app.use(session({
    secret: "12s5s5s2c85s8c5e58c25s258",
    // secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

// ----Parse data
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

// --StyleCSS
app.use(express.static(__dirname + '/style'));

//---------------Routes
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// ----------Events Routes
app.use('/', sessionsController)
app.use('/events', eventsController)
app.use('/futureEvents', futureEventsController)

app.listen(3000, () => {
    console.log("Events on port 3000")
});
