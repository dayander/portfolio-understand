"use strict";
var express = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();
app.use(cookieParser());

// APIs
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');



//
// var MongoClient = require('mongodb').MongoClient;
//
// // const uri = 'mongodb://dayander:Burton12!@ds133876.mlab.com:33876/portfolio';
const options = {useNewUrlParser: true};


const dbURI = "mongodb://dayander:Burton12!@cluster0-shard-00-00-ujeul.mongodb.net:27017,cluster0-shard-00-01-ujeul.mongodb.net:27017,cluster0-shard-00-02-ujeul.mongodb.net:27017/portfolio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

// mongoose.connect(dbURI, function (err, client) {
//     const db = client.db('portfolio');
//
// });

// mongoose.connect(dbURI, options).then(function () {
//         console.log('database connection Established')
//
//     }).catch(function (err) {
//         console.log("Error connecting to database", err)
//     });
//
// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled Rejection at:', reason.stack || reason)
//     // Recommended: send the information to sentry.io
//     // or whatever crash reporting service you use
// })

//mongoose.Promise = global.Promise;


//
// mongoose.connect(dbURI, function (err, client) {
//     const collection = client.db("test").collection("devices");
//
//
//
// } )

//mongoose.connect(uri, options);

mongoose.connect(dbURI);
// mongoose.connect('mongodb://dayander:Burton12!@ds133876.mlab.com:33876/portfolio');
// mongoose.connect('mongodb://localhost:27017/test');
var Contact = require('./models/contact.js');
//
var Projects = require('./models/projects.js');
var Post = require('./models/post.js');


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('before mongo connection');
const db = mongoose.connection;



db.on('error', console.error.bind(console, '# MongoDB connection error:'));
// SET UP SESSIONS
app.use(session({
    secret: 'mySecretString',
    saveUnitialized: false,

    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
    store: new MongoStore({
        mongooseConnection: db,
        ttl: 24*60*60,
    })

}));


// GET BOOKS IMAGES API


app.get('/images', (req,res)=>{
    const imgFoler = __dirname + '/public/images';
    //get file system
    const fs = require('fs');

    //Read all files in system
    fs.readdir(imgFoler, (err, files)=>{
        if(err){
            return console.log(err);
        }
        const filesArr = [];
        //Iterate all images in dir
        files.forEach((file)=>{
            filesArr.push({name: file});
        })
        res.json(filesArr)
    })

})




app.get('/projects', function(req, res){




    Projects.find(function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});


app.get('/projects/:projectName', function(req, res){






    var name = req.params.projectName;

    Projects.findOne(({projectName: name}),function(err, projects){
        if(err){
            throw err;
        }

        res.json(projects)
    })
});


app.post('/contact', function(req, res){

    var contact = req.body;
    Contact.create(contact, function(err, contact){
        if(err){
            throw err;
        }




        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:
                pass:
            }
        });

        var mailOptions = {
            from: contact.email,
            to: 
            subject: 'From Portfolio',
            text: contact.message
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });




        res.json(contact);
    })

});

app.get('/posts', function(req, res){



    Post.find(function(err, posts){

        if(err){
            throw err;
        }

        res.json(posts)
    })
});


app.get('/posts/:title', function(req, res){

    var name = req.params.title;
    name = '/'+ name;

   Post.findOne(({'slug': name}),function(err, post){
        if(err){
            throw err;
        }


        res.json(post)
    })
});






app.post('/post', function(req, res){

    var post = req.body;

    console.log(post);
    Post.create(post, function(err, post){
        if(err){
            throw err;
        }
        res.json(post);
    })

});


app.post('/insert', function (req, res) {
    console.log("hey")
})





//Save session
// app.post('/cart', (req, res)=>{
//     // if (req.session.cart){
//     //     let cartUpdate = req.body;
//     //     let oldCart = req.session.cart;
//     //     let updatedCart = [...oldCart, ...cartUpdate]
//     //     req.session.cart = updatedCart;
//     //     req.session.save((err)=>{
//     //         if(err){
//     //             throw err
//     //         }
//     //         res.json(req.session.cart)
//     //     })
//     //     return;}
//     let cart = req.body;
//
//     req.session.cart = cart;
//     req.session.save((err)=>{
//         if(err){
//             throw err
//         }
//         res.json(req.session.cart)
//     })
// })
//
//
// app.get('/cart', (req,res)=>{
//     if( typeof req.session.cart !== 'undefined'){
//         res.json(req.session)
//     }
// })
//
//
// // END SESSION SET UP
//
//
//
//
// //---->>> POST BOOKS <<<-----
// app.post('/books', function(req, res){
//     console.log(req.body);
//     var book = req.body;
//     Books.create(book, function(err, books){
//         if(err){
//             throw err;
//         }
//         res.json(books);
//     })
//
// });
// //----->>>> GET BOOKS <<<---------
// app.get('/books', function(req, res){
//
//     Books.find(function(err, books){
//         if(err){
//             throw err;
//         }
//
//         res.json(books)
//     })
// });
// //---->>> DELETE BOOKS <<<------
// app.delete('/books/:_id', function(req, res){
//     var query = {_id: req.params._id};
//     Books.remove(query, function(err, books){
//         if(err){
//             throw err;
//         }
//         res.json(books);
//     })
// });
// //---->>> UPDATE BOOKS <<<------
// app.put('/books/:_id', function(req, res){
//     var book = req.body;
//     var query = {_id: req.params._id};
// // if the field doesn't exist $set will set a new field
//     var update = {
//         '$set':{
//             title:book.title,
//             description:book.description,
//             image:book.image,
//             price:book.price
//         }
//     };
// // When true returns the updated document
//     var options = {new: true};
//     Books.findOneAndUpdate(query, update,
//         options, function(err, books){
//             if(err){
//                 throw err;
//             }
//             res.json(books);
//         })
// })
// END APIs
app.listen(4001, function(err){
    if(err){
        return console.log(err);
    }
    console.log('API Sever is listening on http://localhost:4001');
        });


//-----------------------------------------------------------------------