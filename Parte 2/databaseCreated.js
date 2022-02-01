/*  
Previamente:
    Debemos llamar un nuevo terminal "Command Prompt"
    y colocar los comandos "npm install mysql"
    y luego "npm install"
*/  
    
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin"
});
    
//  Creamos la conexión hacia la base de datos
    
con.connect(function (err) {
    if (err) throw err;
    console.log("CONNECTED!");

    //  CREACIÓN DE UNA BASE DE DATOS MySQL

    con.query("CREATE DATABASE VENTAS_MYSQL_2022", function(err, result){
        if (err) throw err;
        console.log("DATABASE CREATED");
    });
}); 
    
//  Luego ejecutar en command prompt la conexion a la base de datos
//  En este caso es "node demo_db_connection.js"