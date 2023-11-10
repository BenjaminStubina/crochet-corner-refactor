require('dotenv').config();
const uri = process.env.DB_URI_PW;
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri);
const dbName = "CrochetCorner";
const colName = "Stitches"

module.exports = async function (requestQuery) {
    const db = client.db(dbName);

    // The purpose of this function is to determine the request made by the front-end and return the requested data
    // Data can be requested as either: 1. List of stitches for us/uk page, 2. List of stitches with favourite = true, 3. Individual stitches

    switch (requestQuery) {
        case('page'): {
            const pageQuery = await db.collection(colName).find().toArray();
            return JSON.stringify(pageQuery); // Returns list of all stitches
            break
        }
        case('fav'): {
            const favQuery = await db.collection(colName).find({favourite:true}).toArray();
            return JSON.stringify(favQuery); // Returns list of all stitches that are favourited
            break
        }
        default: {
            const stitchQuery = await db.collection(colName).find({stitch_id:requestQuery}).toArray();
            return JSON.stringify(stitchQuery); // Returns individual stitch requested
            break
        }
    }
}