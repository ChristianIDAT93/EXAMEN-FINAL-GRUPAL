var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("VENTAS-MONGODB-2022");
    var myobj={NOMBRE: "CONVERSACION EN LA CATEDRAL", AUTOR:"MARIO VARGAS LLOSA", NUMERO_PÁGINAS: "720", COLOR:"VERDE" };

    dbo.collection("CLIENTE").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});