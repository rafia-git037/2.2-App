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


/*

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use('/', router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.MONGO_URI, dbOptions)
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log('Database connection failed in SERVER:', err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/