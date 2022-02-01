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

    var sql1 = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES ('Christian Martin', 'Huaman Marcos', 26, 951742123, 'chrismar123@hotmail.com')";

    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("1 RECORD INSERTED");
    });

    var sql2 = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES ('Wilder', 'Zamalloa Urbano', 30 , 963214524, 'WilZU@hotmail.com')";
    con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("1 RECORD INSERTED");
    });

    var sql3 = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES ('Luz Lorena', 'Peña Segundo', 19, 991245787, 'luzpese@hotmail.com')";
    con.query(sql3, function (err, result) {
        if (err) throw err;
        console.log("1 RECORD INSERTED");
    });

    var sql4 = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES ('Luis Alberto', 'Amones Palacios', 24, 911223345, 'luisAmoPa@hotmail.com')";
    con.query(sql4, function (err, result) {
        if (err) throw err;
        console.log("1 RECORD INSERTED");
    });
});