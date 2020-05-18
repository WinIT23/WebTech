var express = require('express');
var app = express();


// "/" -> "Hi There"
app.get("/", (req, res) => {
    res.send("Hi There");
});

// "/bye" -> "Bbye"
app.get("/bye", (req, res) => {
    res.send("Bbye!!");
});
// "/dog" -> "Woofff"
app.get("/dog", (req, res)=> {
    console.log("SOMEONE MADE REQUEST ON /DOG");
    
    res.send("Wooff.... Woofff!!!");
});

// Tell Express to listen for request (start Server)
var port = 3000;
app.listen(port, () => {
    console.log("Server has started on port " + port);
});