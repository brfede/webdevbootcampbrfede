var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});
/*Cuando hacemos un post estamos haciendo un request a una ruta determinada, en este request 
hay un body que contiene lo que se està pidiendo por parte del usuario, para que nosotros podamos utilizar el contenido
de lo que está pidiendo el usuario tenemos que:
    *En la etiqueta "form" poner los atributos action y method. En action pondremos la ruta referida al post
        y en method nos referiremos al método sea post, get, put, etc...
    *en el "input" del formulario, poner un "name". Este "name" se va a guardar en el body del request y 
         nosotros podemos guardarlo en una variable. 
Para que ejs pueda interpretar el contenido del body, debemos instalar body-parser 
("npm install body-parser --save"), requerirlo en una variable y usar la siguiente consigna
        app.use(bodyParser.urlencoded({extended: true});

Para que podamos agregar este valor al array debemos hacer que el array sea global y no de función, sin embargo, este 
no es un método que vayamos a usar ya que usaremos mongo como base de datos y no arrays en nuestro código. Esto último
es de bido a que si nosotros reiniciamos el servidor, desaparecerán los nuevos valores.

Para que la página, luego de hacer el post, redirija a la misma página y no a otra X, debemos usar res.redirect("/rutaPrevia")*/
app.post("/addFriend", function(req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started with port: " + process.env.PORT + " and IP: " + process.env.IP);
});