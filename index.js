const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('./middlewares/authmiddleware')
const env = process.env.NODE_ENV || 'development';
const app = express();
const config = require('./config/config')[env];
const routes = require('./routes');
const initDatabase = require('./config/database');

require('./config/express')(app);
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(auth);

// const mongoose = require('mongoose');
require('dotenv/config');
app.use(routes);

initDatabase(process.env.DB_CONNECTION).then( () => {
    app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
    console.log('Connected to DB ...');
})
.catch(err => {
    console.error.bind(console, 'connection error')
})
// const db = mongoose.connection;
// db.on('error', );



