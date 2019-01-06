var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
            {name: "Salmon Creek", image: "http://www.tokkoro.com/picsup/1500505-camping.jpg"},
            {name: "Granite Hill", image: "http://www.tokkoro.com/picsup/1500491-camping.jpg"},
            {name: "Mountain Goat's Rest", image: "http://www.tokkoro.com/picsup/1500492-camping.jpg"}
        ];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    
    res.render("campground", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect to campgrounds
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp has started");
});