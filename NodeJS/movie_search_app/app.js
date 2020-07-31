var express = require('express');
var request = require('request');
var app = express();

// http://www.omdbapi.com/?apikey=ecdf326b&

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    var query = req.query.search;
    var url = `http://www.omdbapi.com/?apikey=ecdf326b&s=${query}`;
    
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data : data});
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Movie App has stated on port : ${PORT}`);
});