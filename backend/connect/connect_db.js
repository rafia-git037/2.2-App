//connect_db.js  - backend

const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully IN CONNECT_DB');
    } catch (err) {
        console.error('Database connection failed IN CONNECT_DB:', err);
    }
}

module.exports = connectDb;
