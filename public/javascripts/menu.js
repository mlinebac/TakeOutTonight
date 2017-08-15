



firebase.initializeApp({
    serviceAccount: "./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com"
});
// gets reference to items from firebase
var dbRefItem = firebase.database().ref().child('items');

//code for item-1
var dbRefItemOne = dbRefItem.child('item-1');

dbRefItemOne.on('value', snap => {
    dbRefItemOne = snap.val();
    $('#item-1').html(dbRefItemOne.name);
    $('#item-1-description').html(dbRefItemOne.description);
    $('#item-1-price').html("$" + dbRefItemOne.price);
    $('#dinner1').html (function() {
        var unitPrice = dbRefItemOne.price;
        var unitName = dbRefItemOne.name;
        return ("$" + unitPrice + " " + unitName);
    });
});

//code for item-2
var dbRefItemTwo = dbRefItem.child('item-2');

dbRefItemTwo.on('value', snap => {
    dbRefItemTwo = snap.val();
    $('#item-2').html(dbRefItemTwo.name);
    $('#item-2-description').html(dbRefItemTwo.description);
    $('#item-2-price').html("$" + dbRefItemTwo.price);
    $('#dinner2').html (function() {
        var unitPrice = dbRefItemTwo.price;
        var unitName = dbRefItemTwo.name;
        return ("$" + unitPrice + " " + unitName);
    });
});

//item-3
var dbRefItemThree = dbRefItem.child('item-3');

dbRefItemThree.on('value', snap => {
    dbRefItemThree = snap.val();
    $('#item-3').html(dbRefItemThree.name);
    $('#item-3-description').html(dbRefItemThree.description);
    $('#item-3-price').html("$" + dbRefItemThree.price);
    $('#dinner3').html (function() {
        var unitPrice = dbRefItemThree.price;
        var unitName = dbRefItemThree.name;
        return ("$" + unitPrice + " " + unitName);
    });
});
//item-4
var dbRefItemFour = dbRefItem.child('item-4');

dbRefItemFour.on('value', snap => {
    dbRefItemFour = snap.val();
    $('#item-4').html(dbRefItemFour.name);
    $('#item-4-description').html(dbRefItemFour.description);
    $('#item-4-price').html("$" + dbRefItemFour.price);
    $('#dinner4').html(function() {
        var unitPrice = dbRefItemFour.price;
        var unitName = dbRefItemFour.name;
        return ("$" + unitPrice + " " + unitName);
    });
    $('.selectpicker').selectpicker('refresh');
});







