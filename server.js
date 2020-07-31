const express = require('express');
const app = express();

// NEW ROUTE
app.get('/commBoard/new', (request, response) => {
    console.log("This is homepage")
})

app.listen(3000, () => {
    console.log("commBoard working")
})