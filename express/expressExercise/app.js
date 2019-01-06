var express = require("express");
var app = express();

//Visitando "/" debe imprimir "Hi there, welcome to my assignment"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment");
});
//Visitando "/speak/xanimal" debe imprimir el sonido del animal indicado por el usuario
app.get("/speak/:animal", function(req, res) {
   var animal = req.params.animal.toLowerCase();
   if(animal === "pig"){
       //Visitando "/speak/pig" debe imprimir "The pig says 'Oink'"
       res.send("The " + animal +" says \"Oink\"");
   } else if(animal === "cow") {
       //VIsitando "/speak/cow" debe imprimir "The pig says 'Moo'"
       res.send("The " + animal +" says \"Moo!\"");
   } else if(animal === "dog") {
       //VIsitando "/speak/dog" debe imprimir "The pig says 'Woof Woof!'
       res.send("The " + animal +" says \"Woof Woof!\"");
   } else {
       res.send("I'm sorry, don´t know that animal");
   }
   
});

//
app.get("/repeat/:word/:repNum", function(req, res) {
    var word = req.params.word.toLowerCase();
    var repNum = Number(req.params.repNum);
    var result = "";
    
    for(var i = 0; i < repNum; i++) {
        result += word + " ";
    }
    res.send(result);
});
//Visitando cualquier otra ruta debe decir "Sorry, page not found... what are you doing with your life?"
app.get("*", function(req, res) {
    res.send("Sorry, page not found... what are you doing with your life?");
});
//Iniciando el servidor
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Servidor iniciado a través del puerto: " + process.env.PORT + "con la siguiente IP: " + process.env.IP);
});