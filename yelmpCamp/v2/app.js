var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});



module.exports = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
    name: "Granite Hill", 
    image: "http://www.tokkoro.com/picsup/1500491-camping.jpg",
    description: "This is a huge granite hill, no bathrooms, no water. Beautiful granite!"
    
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND: ");
            console.log(campground);
        }
    });*/

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    //Get all campgrounds from the DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - 
app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
    
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//SHOW - shows info about a specific campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err){
            console.log(err);
        } else {
            //render show tamplate with that campground
            res.render("show", {campground: foundCampground});        
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp has started");
});