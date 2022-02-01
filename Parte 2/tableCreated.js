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
    
    var sql = "CREATE TABLE USUARIO (ID_USUARIO INT AUTO_INCREMENT PRIMARY KEY, NOMBRE VARCHAR(255), APELLIDO VARCHAR(255), EDAD INT, CELULAR INT, CORREO VARCHAR(255))";

    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("TABLE CREATED USUARIO!");
    });
});