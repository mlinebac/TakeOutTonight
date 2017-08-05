

firebase.initializeApp({
    serviceAccount: "./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com"
});


const ref = firebase.database().ref('user orders');

function onClick(){
//place orders to firebase from form
ref.push({
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
    selection: document.getElementById("userSelection").value,
    date: document.getElementById("userDateSelection").value,
    message: document.getElementById("userMessage").value,
    timestamp: firebase.database.ServerValue.TIMESTAMP
});
}

// places items name and description from firebase
const dbRefItem = firebase.database().ref().child('items');
const dbRefItemName = dbRefItem.child('item-1/name');
const dbRefItemDescription = dbRefItem.child('item-1/description');

dbRefItemName.on('value', snap => {
    const h1 = document.getElementById('item-1');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner1');
    selection.innerText = snap.val();
});

dbRefItemDescription.on('value', snap => {
    const p = document.getElementById('item-1-description');
    p.innerText = snap.val();
    console.log(snap.val())
});



