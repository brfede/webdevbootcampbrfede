var Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    methodOverride = require("method-override"),
    LocalStrategy  = require("passport-local"),
    User           = require("./models/user"),
    bodyParser     = require("body-parser"),
    passport       = require("passport"),
    mongoose       = require("mongoose"),
    seedDB         = require("./seeds"),
    express        = require("express"),
    app            = express();

//requiring routes
var indexRoutes         = require("./routes/index"),
    commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds");
    
mongoose.connect("mongodb://localhost:27017/yelp_camp_v10", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
// seedDB(); //seed the database

//PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "I'm gonna rock this course",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
   res.locals.currentUser = req.user; //todo lo que ponga en locals está accesible a todos los templates
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp has started");
});