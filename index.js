const express = require('express');
const env = process.env.NODE_ENV || 'development';
const app = express();
const config = require('./config/config')[env];
const routes = require('./routes');

require('./config/express')(app);
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB ...');
});
const db = mongoose.connection;
db.on('errpr', console.error.bind(console, 'connection error'));

app.use(routes);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
