$(function () {

    //data variable to keep track of data from Firebase
    var data = [];

    var ref = new Firebase('https://takeouttonight-a60b0.firebaseio.com/form');

    ref.on("value", function(snapshot){

        console.log(snapshot.val() );

        //putting updated data from Firebase into data variable
        data = snapshot.val();
    })

    $('#newForm').submit(function(event){
        var $form = $(this);
        console.log("submit to Firebase");

      //make submit disabled
      $form.find("#submitForm").prop('disabled', true);

      //get values to send to firebase
      var nameToSend = $('#name').val();
        console.log(nameToSend);

      var emailToSend = $('#email').val();
        console.log(emailToSend);

      var selectToSend = $('#select').val();
        console.log(selectToSend);

      var radioToSend = $('#radio').val();
        console.log(radioToSend);

      var messageToSend = $('#message').val();
        console.log(messageToSend);

        //creating object with values from form
        var newForm = {
            "name": nameToSend,
            "email": emailToSend,
            "select": selectToSend,
            "radio": radioToSend,
            "message": messageToSend
        };
        // putting the object into data array
        data.push(newForm);
        console.log(data);
        //sending data to Firebase
        ref.set(data);
    })
});