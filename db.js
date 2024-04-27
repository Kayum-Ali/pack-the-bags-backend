const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

const db = client.db("pack-the-bags");
const destinations = db.collection("destinations");

module.exports.db = db;
module.exports.destinations = destinations;
