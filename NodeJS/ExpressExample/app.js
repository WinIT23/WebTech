var express = require('express');
var app = express();

// set resource folder
app.use(express.static("public"));
// we don't have to write .ejs in every render statement.
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
    res.render("index");
});

app.get("/msg/:thing", (req, res) => {
    res.render("things", {
        thingVar: req.params.thing
    })
});

app.get("/speak", (_req, res) => {
    var Animals = [{
        name: "pig",
        sound: "Oink"
    }, {
        name: "cow",
        sound: "Moo"
    }, {
        name: "dog",
        sound: "Woof Woof!"
    }, {
        name: "cat",
        sound: "Meow"
    }, {
        name: "goat",
        sound: "Meeehhhh"
    }];

    res.render("speak", {
        animalArr: Animals
    });
});

var port = 3000;
app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT " + port);
});