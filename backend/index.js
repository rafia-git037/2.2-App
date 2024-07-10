//server.js - backend
/*
const express = require('express')
const connectDb = require('./connect/connect_db')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())

const PORT = 9000 || process.env.PORT

connectDb().then(() => {
    app.listen(PORT, ()  => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
}).catch(error => {
    console.error("Failed to connect to DB", error);
}); 

*/



// backend/index.js
const express = require('express');
const connect_db = require('./connect/connect_db');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter'); // Assuming this is for authentication routes

require('dotenv').config();
require('./models/db'); // Ensure your database models are loaded

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());


app.use(cors({
  origin : process.env.FRONTEND_URL,
  credentials : true,
}))

// Routes
app.use('/auth', AuthRouter); // Assuming AuthRouter handles authentication routes

// Connect to MongoDB
connect_db()
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process if MongoDB connection fails
  });
