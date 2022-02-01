var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "VENTAS_MYSQL_2022"
});
con.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log("CONNECTED!");
    }
});
con.query('SELECT * FROM USUARIO', function(error, filas){
    if (error) {
        throw error;
    } else {
        filas.forEach(fila => {
        console.log(fila);
        });
    }
});