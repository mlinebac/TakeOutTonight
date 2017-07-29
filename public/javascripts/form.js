
    var orderForm = document.getElementById('order-form');
    var sendButton = document.getElementById('send-button');

    function sendForm (formObj){
        var firebaseRef = firebase.database().ref('orders/');
        firebaseRef.set({
            name: formObj.name.value,
            email: formObj.email.value,
            select: formObj.select.value,
            radio: formObj.radio.value,
            message: formObj.message.value
        });
    }

