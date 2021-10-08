const express = require('express');
const env = process.env.NODE_ENV || 'development';
const app = express();
const config = require('./config/config')[env];
const routes = require('./routes');
const initDatabase = require('./config/database');

require('./config/express')(app);
app.use(express.urlencoded({extended: false}));

// const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

initDatabase(process.env.DB_CONNECTION).then( () => {
    app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
    console.log('Connected to DB ...');
})
.catch(err => {
    console.error.bind(console, 'connection error')
})
// const db = mongoose.connection;
// db.on('error', );

app.use(routes);


