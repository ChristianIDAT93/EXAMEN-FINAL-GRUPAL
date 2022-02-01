let jConexion = {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "VENTAS_MYSQL_2022"
}

var mysql = require('mysql');

//  Pasamos el Json de Conexión

var con = mysql.createConnection(jConexion);

//  Abrimos conexion a la base de datos, "connect" y regresa un error en caso
//  que no se pueda conectar a la base de datos.

con.connect(function(error){
    try {
        if (error) {
            //  Si error es "true" mandamos el mensaje de error.
            console.log("ERROR AL ESTABLECER LA CONEXION A LA BD --" + error);
        } else {
            //  Conexion exitosa, en este punto ya hemos establecido la conexión
            //  a la base de datos.
            console.log("CONEXION EXITOSA");
            //  Aqui debes escribir el código que necesites, un INSERT, SELECT, ect...
        }
    } catch (x) {
        console.log(x);
    }
});

// Finalmente ejecutamos en el Command Prompt "node conexion.js"
