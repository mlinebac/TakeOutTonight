
    //var orderForm = document.getElementById('order-form');
    //var sendButton = document.getElementById('send-button');
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

    var submit = document.getElementByTagName('button')[0];
    submit.onclick = sendForm;
