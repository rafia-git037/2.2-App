//connect_db.js  - backend
/*
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_CONN);
        console.log('Database connected successfully IN CONNECT_DB');
    } catch (err) {
        console.error('Database connection failed IN CONNECT_DB:', err);
    }
}

module.exports = connectDb; 

*/
// connect_db.js

const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true // Add this line to avoid deprecation warning
        });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

module.exports = connectDb;
