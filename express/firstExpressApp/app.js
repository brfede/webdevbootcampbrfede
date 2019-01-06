/*
    1. Instalamos express con el comando npm install express
    2. Requerimos express en nuestra aplicación inicializando una variable y asignandole require("express"), con lo que importará el módulo express en esa variable
    3. Al tener muchos métodos, debemos expresar la función express() en la variable app
    4. Se usan los métodos utilizando "app.método"
*/
var express = require("express");
var app = express();

// Creamos la ruta "/" con response => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

//Creamos la ruta "/bye" con response => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

//Creamos la ruta "/dog" con response => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

//Se pueden crear rutas variables en las que se tome lo que el usuario escribe o lo que el sistema asigne a esa información que tiene guardada
//Esto se hace colocando una palabra clave para ese parámetro y dos puntos ":" antes de esta.
app.get("/r/:subName", function(req, res) {
    var subName = req.params.subName;
    res.send("BIENVENIDO A " + subName.toUpperCase());
});

app.get("/r/:subName/comments/:id/:title", function(req, res) {
    
    res.send("Welcome to comments page...");
});

//Ruta star "*", la cuál sirve para que el usuario reciba un mensaje de error al ingresar a una ruta que no existe
//Esta ruta debe ir siempre al final. Si la colocamos al principio no podremos salir de esa ruta
app.get("*", function(req, res) {
    res.send("You are a star!");
});

//Para que la aplicación funcione debemos indicar el puerto y el host que estamos utilizando
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server started on the PORT: " + process.env.PORT + ", with IP: " + process.env.IP);
});

