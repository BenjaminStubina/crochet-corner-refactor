require('dotenv').config();
const uri = process.env.DB_URI_PW;
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);
const dbName = "CrochetCorner";
const colName = "Stitches"
const STITCHES = require('./stitches');

module.exports = async function () {
    const db = client.db(dbName);
    const col = db.collection(colName);
    // Searching through the DB to check whether the stitch_id is unique as to not add duplicates.
    const idQuery = await db.collection(colName).distinct('stitch_id')
    const idSet = new Set();
    idQuery.forEach((id) => {
        idSet.add(id);
    })
    // Checking to see if the stitch_id of any of the stitches is already in the DB collection
    STITCHES.map(async (stitch) => {
        if (!idSet.has(stitch.stitch_id)) {
            let newEntry = {
                "stitch_id": stitch.stitch_id,
                "favourite": stitch.favourite,
                "usName": stitch.usName,
                "usCode": stitch.usCode,
                "ukName": stitch.ukName,
                "ukCode": stitch.ukCode,
                "image": stitch.image,
                "tutorial": stitch.tutorial,
                "description": stitch.description,
                "diagram": stitch.diagram
            }
            await col.insertOne(newEntry)
            console.log('Stitch has been added to the DB')
        }
        else {
            console.log('Stitch is already in DB')
        }
    })
}