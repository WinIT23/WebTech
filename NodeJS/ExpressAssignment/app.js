var express = require('express'),
    app = express();

var errorStr = "Sorry, page not found... What are you doing with your life?";


app.get("/", (_req, res) => {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:name", (req, res) => {
    var name = req.params.name;
    console.log("GET REQUEST ON /speak/" + name);
    // switch case for each name;
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
    } ];

    // find Animal 
    var Animal = Animals.find((ani) => ani.name === name);
    if(Animal) {
        res.send("the " + Animal.name + " says \'" + Animal.sound + "\'");
    } else {
        res.send(errorStr);
    }
});

app.get("/repeat/:str/:num", (req, res) => {
    var num = parseInt(req.params.num),
        str = req.params.str,
        string = "";

    console.log("GET REQUEST ON /repeat/" + str + "/" + num);

    for (var i = 0; i < num; i++)
        string += str + " ";
    res.send(string);
});

app.get("*", (_req, res) => {
    res.send(errorStr);
});

var port = 3000;
app.listen(port, () => {
    console.log("SERVER STARTED ON PORT : " + port);
});