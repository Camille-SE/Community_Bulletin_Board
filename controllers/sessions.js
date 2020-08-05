const express = require('express')
const User = require('../models/user');

const router = express.Router();

router.post('/login', (req, res) => {
    req.session.username = req.body.username
    req.session.loggedIn = true
    res.redirect('/events')
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    })
})


module.exports = router;