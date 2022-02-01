var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS-MONGODB-2022";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("Database create!");
    db.close();
});