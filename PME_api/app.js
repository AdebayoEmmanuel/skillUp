const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const route = require('./routes/routes');



//start express server
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
})

//setup DB connection
const dbString = process.env.DATABASE_URL;

mongoose.connect(dbString);
const db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('connected', () => console.log('Database connection established'));


//setup routes for endpoints
app.use('/api', routes);

