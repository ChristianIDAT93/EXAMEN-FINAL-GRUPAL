var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("CONNECTED!");
    
    var sql = "DELETE FROM USUARIO WHERE ID_USUARIO=1";

    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 RECORD DELETED");
    });
});