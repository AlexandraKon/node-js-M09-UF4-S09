//import express
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// const dotenv = require('dotenv');
// dotenv.config();

const app = express();
const db = require('./db/connect');

app.use(cors());
app.use(express.json());

db.createConnection();

app.use('/api/v1/smartphone', require('./routers/smRouters'));

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
});
