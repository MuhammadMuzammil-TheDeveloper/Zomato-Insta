const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/foodview")
        .then(() => {
            console.log("MongoDB connected")
        })
        .catch((err) => {
            console.log("MongoDB connection error:", err)
        })
    }
module.exports = connectDB;