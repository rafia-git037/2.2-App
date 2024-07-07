 //backend /Models / db.js
 
 const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected in db. ');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })