//  create Server

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Zomato Insta");
})


module.exports = app;