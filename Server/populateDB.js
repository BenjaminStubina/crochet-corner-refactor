require('dotenv').config();
const uri = process.env.DB_URI_PW;
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);
const dbName = "CrochetCorner";
const colName = "Stitches"

module.exports = async function () {
    const db = client.db(dbName);
    const col = db.collection(colName);
    const idQuery = await db.collection(colName).distinct('stitch_id')
}