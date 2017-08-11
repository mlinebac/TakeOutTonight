



firebase.initializeApp({
    serviceAccount: "./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com"
});
// places items name and description from firebase
const dbRefItem = firebase.database().ref().child('items');

//code for item-1
const dbRefItemOneName = dbRefItem.child('item-1/name');
const dbRefItemOneDescription = dbRefItem.child('item-1/description');
dbRefItemOneName.on('value', snap => {
    const h1 = document.getElementById('item-1');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner1');
    selection.innerText = snap.val();
});

dbRefItemOneDescription.on('value', snap => {
    const p = document.getElementById('item-1-description');
    p.innerText = snap.val();
    console.log(snap.val())
});

//code for item-2
const dbRefItemTwoName = dbRefItem.child('item-2/name');
const dbRefItemTwoDescription = dbRefItem.child('item-2/description');
dbRefItemTwoName.on('value', snap => {
    const h1 = document.getElementById('item-2');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner2');
    selection.innerText = snap.val();
});

dbRefItemTwoDescription.on('value', snap => {
    const p = document.getElementById('item-2-description');
    p.innerText = snap.val();
    console.log(snap.val())
});

//item-3
const dbRefItemThreeName = dbRefItem.child('item-3/name');
const dbRefItemThreeDescription = dbRefItem.child('item-3/description');
dbRefItemThreeName.on('value', snap => {
    const h1 = document.getElementById('item-3');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner3');
    selection.innerText = snap.val();
});

dbRefItemThreeDescription.on('value', snap => {
    const p = document.getElementById('item-3-description');
    p.innerText = snap.val();
    console.log(snap.val())
});

//item-4
const dbRefItemFourName = dbRefItem.child('item-4/name');
const dbRefItemFourDescription = dbRefItem.child('item-4/description');
dbRefItemFourName.on('value', snap => {
    const h1 = document.getElementById('item-4');
    h1.innerText = snap.val();
    console.log(snap.val());
    const selection = document.getElementById('dinner4');
    selection.innerText = snap.val();
});

dbRefItemFourDescription.on('value', snap => {
    const p = document.getElementById('item-4-description');
    p.innerText = snap.val();
    console.log(snap.val())
});

//places order to firebase from form
function onClick() {
    const ref = firebase.database().ref('user orders');
    ref.push({
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        selection: document.getElementById("userSelection").value,
        date: document.getElementById("userDateSelection").value,
        message: document.getElementById("userMessage").value,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    var popup = document.getElementById("formSubmitted");
    popup.classList.toggle("show");
}





