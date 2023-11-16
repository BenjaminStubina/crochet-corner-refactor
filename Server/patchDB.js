require('dotenv').config();
const uri = process.env.DB_URI_PW;
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);
const dbName = "CrochetCorner";
const colName = "Stitches"

module.exports = async function (patchObject) {
    const db = client.db(dbName);
    const col = db.collection(colName);
    const id = patchObject.stitch_id
    await col.updateOne({stitch_id: id}, {$set: patchObject})
} 
