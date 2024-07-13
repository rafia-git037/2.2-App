// connect_db.js

const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true 
        });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

module.exports = connectDb;
