const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const connectDB = require('./connectDB.js');
const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log('Listening on port: 8080')
    connectDB();
});