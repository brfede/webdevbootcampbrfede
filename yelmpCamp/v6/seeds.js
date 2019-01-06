var Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    mongoose   = require("mongoose");

var data = [
    {
        name: "Cloud's Rest",
        image: "http://www.tokkoro.com/picsup/1500492-camping.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Deser Mesa",
        image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
    ];

function seedDB() {
    //Remove all comments
    Comment.deleteMany({},function(err, comment) {
       if(err) {
           console.log(err);
       } else {
           console.log(comment);
           console.log("Comments deleted");
       }
    });
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
       if (err) {
          console.log(err); 
       } else {
           console.log("Removed campgrounds!");
           //add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is greate but i wish there was internet",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            }
                        );
                    }
                });
        
            });
       }
    });
    
}

module.exports = seedDB;
