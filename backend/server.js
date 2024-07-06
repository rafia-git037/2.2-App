//server.js - backend
/*
const express = require('express')
const connectDb = require('./connect/connect_db')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())

const PORT = 8000 || process.env.PORT

connectDb().then(() => {
    app.listen(PORT, ()  => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
}).catch(error => {
    console.error("Failed to connect to DB", error);
}); 
*/



const express = require('express');
const connectDb = require('./connect/connect_db');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router'); // Adjust the path as needed

require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 8000;

connectDb().then(() => {
    app.listen(PORT, ()  => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
}).catch(error => {
    console.error("Failed to connect to DB", error);
});
