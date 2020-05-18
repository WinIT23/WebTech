var express = require('express');
var app = express();

app.get("/r/:subRedditName", (req, res) => { // -- :sRN means pattern
    var subreddit = req.params.subRedditName;
    res.send("WELCOME TO A r/" + subreddit);
});

app.get("/r/:subRedditName/comments/:id/:title", (_req, res) => {
    res.send("WELCOME TO COMMENTS PAGE");
});

// "/" -> "Hi There"
app.get("/", (_req, res) => {
    res.send("Hi There");
});

// "/bye" -> "Bbye"
app.get("/bye", (_req, res) => {
    res.send("Bbye!!");
});
// "/dog" -> "Woofff"
app.get("/dog", (_req, res) => {
    console.log("SOMEONE MADE REQUEST ON /DOG");

    res.send("Wooff.... Woofff!!!");
});

app.get("*", (_req, res) => {
    res.send("Check URL..");
});

// Tell Express to listen for request (start Server)
var port = 3000;
app.listen(port, () => {
    console.log("Server has started on port " + port);
});