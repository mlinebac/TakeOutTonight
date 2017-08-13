firebase.initializeApp({
    serviceAccount: "./node_modules/TakeOutTonight/TakeOutTonight-7d991d3a4376.json",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com"
});


//places order to firebase from form
function onClick() {
    var ref = firebase.database().ref('user orders');
    var userName = $('#userName').val();
    var userEmail = $('#userEmail').val();
    var userSelection = $('#userSelection').val() || [];
    var userDateSelection = $('#userDateSelection').val() || [];
    var userMessage = $('#userMessage').val();

    var order = {
        "name": userName,
        "email": userEmail,
        "selection": userSelection,
        "date": userDateSelection,
        "message": userMessage,
        "timestamp": firebase.database.ServerValue.TIMESTAMP
    };

    ref.push({order});

    ref.limitToLast(1).on("child_added", function(childSnapshot) {
       ref = childSnapshot.val();
       var total = 0;
       var getSelection = ref.order.selection;

       for (var i=0; i<getSelection.length; i++){
           total += parseInt(getSelection[i].slice(1));
       }

       $(`#item-selected`).html("<b>Dinner(s) Selected: </b>" + ref.order.selection.join(", "));
       $('#date-selected').html("<b>Date(s) Selected: </b>" + ref.order.date.join(", "));
       $('#price-selected').html("<b>Your Total is: </b>" + "$" + total);

    });

}

