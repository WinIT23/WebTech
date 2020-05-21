var app = require('express')();

app.get("/", (_req, res) => {
    res.render("index.ejs");
});

app.get("/msg/:thing", (req, res) => {
    var thing = req.params.thing;
    res.render("things.ejs", {thingVar: thing})
});

var port = 3000;
app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT " + port); 
});