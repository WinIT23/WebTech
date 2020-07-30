var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["A", "B", "C", "D"];
    
app.get("/", (_req, res) => {
    res.render("home");
});

app.get("/friends", (_req, res) => {
    res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
    var newFriend = req.body.fname; 
    friends.push(newFriend);
    res.redirect("/friends");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
}); 