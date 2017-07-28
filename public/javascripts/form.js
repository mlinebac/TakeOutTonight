$(function () {
    var data = [];

    var ref = new Firebase('https://takeouttonight-a60b0.firebaseio.com/form');

    ref.on("value", function(snapshot){

        console.log(snapshot.val() );

        data = snapshot.val();
    })

    $('#newForm').submit(function(event){
        var $form = $(this);
        console.log("submit to Firebase");

      $form.find("#saveFrorm").prop('disabled', true);
    })
})