const express = require("express")
const router = express.Router()
const Today = require('../models/events')
const Future = require('../models/futureEvents')


router.get('/', async (req, res) => {
    try {
        const futureEvents = await FutureEvents.find({});
        res.render('events/index.ejs', {
            foundFutureEvents: futureEvents,
        });
    } catch (error) {
        res.send(error)
    }
});

//-----Get New Event
router.get('/new', (req, res) => {
    res.render('futureEvents/new.ejs');
});

//-----Get Events Show
router.get('/:id', async (req, res) => {
    try {
        const futureEvent = await FutureEvents.findById(req.params.id);
        res.render('futureEvents/show.ejs', {
            foundFutureEvent: futureEvent,
        });
    } catch (error) {
        res.send(err);
    }
});

//-----Get Event Edit
router.get('/:id/edit', async (req, res) => {
    try {
        const futureEvent = await FutureEvents.findById(req.params.id);
        res.render('futureEvents/edit.ejs', {
            foundFutureEvent: futureEvent,
        });
    } catch (error) {
        res.send(err);
    }
});

//----Get Events Create
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        await Future.create(req.body);
        res.redirect('/futureEvents');
    } catch (error) {
        res.send(err);
    }
});

// ----Delete Route
router.delete('/:id', async (req, res) => {
    try {
      await Future.findByIdAndDelete(req.params.id);
      res.redirect('/futureEvents');
    } catch (error) {
      res.send(err);
    }
  });

//-----Get Events Update
router.put('/:id', async (req, res) => {
    try {
        await Future.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/futureEvents');
    } catch (error) {
        res.send(err);
    }
});

module.exports = router;