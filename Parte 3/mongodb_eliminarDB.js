var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var { ObjectID } = require ('mongodb');



MongoClient.connect(url, function (err, db) {
if (err) throw err;
var dbo = db.db("VENTAS-MONGODB-2022");
var myquery = { _id: ObjectID("61f8836db03a977d14e83c17")}; //Ingresar ID para eliminar
dbo.collection("CLIENTE").deleteOne(myquery, function(err, obj) {
if (err) throw err;
console.log("1 document deleted");
db.close();node
});
});