const express = require("express")
const router = express.Router()
const Today = require('../models/events')
const Future = require('../models/futureEvents')


// ---Index
router.get('/', async (req, res) => {
  try {
    const events = await Today.find({});
    res.render('events/index', {
      foundEvents: events,
    });
  } catch (error) {
    res.send(error)
  }
});

//-----Get New Event
router.get('/new', (req, res) => {
  if (req.session.loggedIn === true) {
    res.render('events/new.ejs');
  } else {
    res.redirect('/');
  }
});

//-----Get Events Show
router.get('/:id', async (req, res) => {
  try {
    const event = await Today.findById(req.params.id);
    res.render('events/show.ejs', {
      foundEvent: event,
    });
  } catch (error) {
      res.send(err);
  }
});

//-----Get Event Edit
router.get('/:id/edit', async (req, res) => {
  try {
    const event = await Today.findById(req.params.id);
    res.render('events/edit.ejs', {
      foundEvent: event,
    });
  } catch (error) {
      res.send(err);
  }
});

//-----Get Events Update
router.put('/:id', async (req, res) => {
  try {
    await Today.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/events');
  } catch (error) {
    res.send(err);
  }
});

//----Get Events Create
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    await Today.create(req.body);
    res.redirect('/events');
  } catch (error) {
    res.send(err);
  }
});

// ----Delete Route
router.delete('/:id', async (req, res) => {
  try {
    await Today.findByIdAndDelete(req.params.id);
    res.redirect('/events');
  } catch (error) {
    res.send(err);
  }
});

module.exports = router;