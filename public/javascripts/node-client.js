

firebase.initializeApp({
    serviceAccount: "./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com"
});


const ref = firebase.database().ref().child("users");
const userRef = ref.child('order');
function onClick(){
ref.set({
        name: document.getElementById("input-name").value
    }
);
userRef.set({
    dinner: "tofu",
    date: "monday"

});

}
/*
$(function(){
    var data=[];
    const ref = firebase.database().ref().child('users');
    const userRef = ref.child('new-user');

    userRef.on("value", function(snapshot){
        console.log(snapshot.val());
        data = snapshot.val();
    });

    $('#submit').submit(function(event) {
        var $form = $(this);
        console.log("submit to firebase");

        $form.find("#saveFrom").prop('disabled', true);


        var email = $('#email').val();
        console.log(email);

        var selection = $('#selection').val();
        console.log(selection);

        var radio = $('#radio').val();
        console.log(radio);

        var message = $('#message').val();
        console.log(message);

        var newUserSubmit = {
            "name": name,
            "email": email,
            "selection": selection,
            "radio": radio,
            "message": message
        }

        data.push(newUserSubmit);
        console.log(data);
        userRef.set(data);

        return false;
    });
});

*/
// places items name and description from firebase
const dbRefItem = firebase.database().ref().child('items');
const dbRefItemName = dbRefItem.child('item-1/name');
const dbRefItemDiscription = dbRefItem.child('item-1/description');

dbRefItemName.on('value', snap => {
    const h1 = document.getElementById('item-1');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner1');
    selection.innerText = snap.val();
});

dbRefItemDiscription.on('value', snap => {
    const p = document.getElementById('item-1-description');
    p.innerText = snap.val();
    console.log(snap.val())
});



