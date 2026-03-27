const monggose = require('mongoose');

function connectDB() {
    monggose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("Mongo Connected")
    }).catch((err) => {
        console.log("Mongodb Connection Error",err);
    })
}

module.exports = connectDB;