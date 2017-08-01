(function () {

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


    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const btnLogout = document.getElementById("btnLogout");

    btnLogin.addEventListener('click', e);

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e);
    console.log(e.message);

});