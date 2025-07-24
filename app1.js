const express = require('express');
const { title } = require('process');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// mongodb url to connect  // uname       password                             //collection name = note-tuts
mongoose.connect("mongodb+srv://User_name:Password@nodetuts.hdrzkwl.mongodb.net/note-tuts?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000);
})
.catch(err => console.log('MongoDB connection error:', err));


// register view Engine
app.set('view engine', 'ejs')

// listen for requests 
// app.listen(3000);

// middleware & static files 
app.use(express.static('public'));

//post 
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev')); // tiny also we can pass for parameter

/*
// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('6880734ec0ec8c4847943b02')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
*/


//middleware
// app.use((req, res, next) => {
//     console.log('New request made')
//     console.log('Host : ',req.hostname)
//     console.log('Path : ', req.path)
//     console.log('Method : ', req.method)
//     next(); // next()
// }) commented to work on morgan

// routes
app.get('/', (req, res) => {
    // const blogs = [
    //     {title: "Yoshi finds eggs", snippet : "Lorem ipsum dolor sit amet. "},
    //     {title: "Mario fins stars", snippet : "Lorem ipsum dolor sit amet consectetur."},
    //     {title: "How to defeat bowser", snippet : "    Lorem ipsum dolor sit amet, consectetur."},
    // ];
    // res.render('index', { title: "Home" , blogs } ); 

    res.redirect('/blogs');

});

//middleware next()
// app.use((req, res, next) => {
//     console.log('in the next middleware')
//     next();
// })  commented to work on morgan

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
});

//blog routes
app.use('/blogs' ,blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})