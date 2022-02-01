var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var { ObjectID } = require ('mongodb');



MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("VENTAS-MONGODB-2022");
var myquery = { _id: ObjectID("61f8838a89333bc01a9cebfa")}; //Ingresar ID para actualizar
var newvalues = { $set: {NOMBRE: "Francisco Javier", AUTOR: "Quiñones Gonzales", NUMERO_PÁGINAS: 800, COLOR : "VERDE"}};
dbo.collection("CLIENTE").updateOne(myquery, newvalues, function(err, res) {
if (err) throw err;
console.log("1 document updated");
db.close();
});
});