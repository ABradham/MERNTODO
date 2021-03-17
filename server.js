// Importing packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importing files with functions to handle api routes
const items = require('./routes/api/items'); // Handles all api/items/* requests

// Port number (uses environment variable when deployed on Heroku)
const port = process.env.PORT ||  5000;

// Initialize Express
const app = express();

// Add body-parser capability to express app (allows us to see if a req is POST/GET/etc)
app.use(bodyParser.json());

// Add reference to our databsae URI
const db = require('./config/keys').mongoURI;

// Connect to MongoDB URI
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB URI Successfully"))
    .catch((err) => console.log(err))

// Define routes that our server will use
app.use('/api/items', items); // Establishes /api/items route

// Start running server
app.listen(port, ()=> console.log(`Server running on port ${port}`))

