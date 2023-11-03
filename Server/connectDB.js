require('dotenv').config();
const uri = process.env.DB_URI_PW;
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);

module.exports = async function () {
    try {
        await client.connect();
        console.log('Connected to DB Successful!')
    } catch (err) {
        console.error(err);
    }
}