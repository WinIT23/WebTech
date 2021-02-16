var expressSanitizer = require('express-sanitizer'),
    methodOverride   = require('method-override'),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    express          = require('express'),
    app              = express();

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(expressSanitizer());
app.set("view engine", "ejs");

// DB CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES     
app.get("/", (_req, res)=> {
    res.redirect("/blogs");
})

//INDEX
app.get("/blogs", (_req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});    
        }
    });
});

// NEW
app.get("/blogs/new", (_req, res) => {
    res.render("new");
});

//CREATE
app.post("/blogs", (req, res) => {
    
    req.body.blog.body =  req.sanitize(req.body.blog.body);

    Blog.create(req.body.blog, (err, blog) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

// SHOW
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            console.log(err);
        } else {
            res.render("show", {blog: foundBlog})
        }
    });
});

// EDIT
app.get("/blogs/:id/edit", (req, res) => {

    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE
app.put("/blogs/:id", (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});


// SERVER LISTENING 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Started on port : ${PORT}`);
});
