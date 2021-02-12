var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// POST 

var postSchema = mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER 

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "dafdfaf@gmail.com",
//     name: "Vinit Chauhan"
// });

// newUser.posts.push({
//     title: "Shut the f up...",
//     content: "nothing/.."
// });

// newUser.save((err, user) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

User.findOne({name: "Vinit Chauhan"}, (err, user) => {
    if(err) {
        // console.log(err);
    } else {
        user.posts.push({
            content: "sdfafafaf",
            title: "shut up again.."
        });

        user.save((err, user) => {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
})