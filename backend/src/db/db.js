const monggose = require('mongoose');

function connectDB() {
    monggose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Mongo Connected")
    }).catch((err) => {
        console.log("Mongodb Connection Error",err);
    })
}

module.exports = connectDB;