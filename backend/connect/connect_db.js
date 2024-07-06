
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




/*
const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection failed:\n", err);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDb;*/


