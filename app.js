var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var firebase = require('firebase');
var app = express();
//var serviceAccount = require ("./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json");

//firebase setup
var config = {
    apiKey: "AIzaSyBeBJ2N_S4V8RusqpFNeGHdweOp9O78gFk",
    authDomain: "takeouttonight-a60b0.firebaseapp.com",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com",
    projectId: "takeouttonight-a60b0",
    storageBucket: "takeouttonight-a60b0.appspot.com",
    messagingSenderId: "78398501206"
};

firebase.initializeApp(config);
var database = firebase.database();

function sendForm (name, email, selection, radio, message ){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userSelection = document.getElementById("selection");
    var userRadio = document.getElementById("radio");
    var userMessage = document.getElementById("message");



    database.ref().set({
        name: userName,
        email: userEmail,
        select: userSelection,
        radio: userRadio,
        message: userMessage
    });
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
