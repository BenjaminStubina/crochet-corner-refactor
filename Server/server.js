const express = require('express');
const cors = require('cors');
const connectDB = require('./connectDB.js');
const populateDB = require('./populateDB.js');
const readDB = require('./readDB.js');
const app = express();
const patchDB = require('./patchDB.js');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// .get returns a request with a query, send this to the readDB function to return the appropriate data from the DB
app.get('/', async(req, res) => {
    const { requestQuery } = req.query;
    const data = await readDB(requestQuery);
    res.json(data);
})

app.patch('/', async(req, res) => {
    const patchObject = req.body;
    patchDB(patchObject);
})

app.listen(8080, () => {
    console.log('Listening on port: 8080')
    connectDB();
    // populateDB(); // Run this function to populate the DB with Stitches from stitches.js
});