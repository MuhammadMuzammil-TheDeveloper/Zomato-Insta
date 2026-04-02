//  create Server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')


const app = express();


app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to  Insta");
})


app.use('/api/auth', authRoutes) // api call ke he mene 
app.use('/api/auth', foodRoutes) // api call ke he mene 

module.exports = app;