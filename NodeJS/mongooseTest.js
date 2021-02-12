var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*
var george = new Cat({
    name: "Mrs. Keran",
    age: 11,
    temperament: "Evil"
});

george.save((err, cat) => {
    if(err) {
        console.log("Something went wrong");
    } else {
        console.log(
            `data is saved..\n${cat}\n${george}`);
    }
});
*/

Cat.create({
    name: "Keran",
    age: 35,
    temperament: "Super Evil"
}, (err, cat) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log("Cat Saved");
    }
});

Cat.find({}, (err, cats) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`All the cats : \n${cats}`);
    }
});