var firebase = require('firebase');
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

sendForm = function(name, email, selection, radio, message ){
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userSelection = document.getElementById("selection");
    var userRadio = document.getElementById("radio");
    var userMessage = document.getElementById("message");


    database.ref('users/').set({
        name: userName,
        email: userEmail,
        select: userSelection,
        radio: userRadio,
        message: userMessage
    });
};
