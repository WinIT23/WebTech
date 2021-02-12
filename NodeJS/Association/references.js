var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// POST

var postSchema = mongoose.Schema({
  title: String,
  content: String,
});

var Post = mongoose.model("Post", postSchema);

// USER

var userSchema = mongoose.Schema({
  email: String,
  name: String,
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
  }],
});

var User = mongoose.model("User", userSchema);

User.findOne({name: "Rick"}).populate("posts").exec((err, usr) => {
    if(!err) {
        console.log(usr);
    }
});

// Post.create({
//     title: "TEST_3",
//     content: "sdfasfasfa"
// }, (err, post) => {
//     if(!err) {
//         User.findOne({name: "Rick"}, (err, foundUser) => {
//             foundUser.posts.push(post);
            
//             foundUser.save((err, user) => {
//                 if(!err) {
//                     console.log(user);
//                 }
//             })
//         });
//     }
// });