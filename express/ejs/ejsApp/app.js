var express = require("express");
var app = express();

/*Para mostrar HTML podríamos usar res.render("archivo.html")
  Sin embargo, cuando se utiliza express no se usa html plano. Se utiliza templates, que pueden ser dinámicos.
  
  Utilizamos ejs (embbebed javaScript), este archivo ejs lo guardamos en la carpeta views como todos los archivos ejs que querramos mostrar según la ruta que solicite el usuario
  Para usar ejs necesitamos instalar el paquete "ejs" con npm install ejs --save
  
  El problema de usar html plano es que mostrará siempre la misma pantalla sin poder modificarla a menos que sea por código. Con ejs podemos hacer que el usuario pueda modificarla también al publicar cosas.
  
  al utilizar res.render tengo que indicar el archivo al que va a hacer referencia esa ruta requerida por el usuario, y separado por una coma, entre llaves también tengo que poner las variables que quiera pasar al template,
  como por ejemplo algún parámetro que el usuario ponga en la ruta y pasarlo para que se muestre en la pantalla.
  
  Estas variables se pasan con el siguiente formato:
  
  res.render("archivo.ejs", {var_en_archivo.ejs: var_en_app.js)
  
  En el archivo ejs para mostrar lo que sea js tengo que usar las siguientes etiquetas <%= lo que quiera mostrar %> 
  
*/

app.use(express.static("public"));

//Una forma para evitar poner ejs en cada mención de archivo es usar app.set("view engine", "ejs");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    res.render("posts", {posts: posts});
}) 

app.get("*", function(req, res) {
    res.send("Page not found!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server listening from port: " + process.env.PORT + " and IP: " + process.env.IP);
}); 