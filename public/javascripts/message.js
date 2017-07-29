var messageRef = firebase.database().ref();


function savedata(evt){

    var messageField = $('#message').text();

    messageRef.set({text:messageField});
    evt.preventDefault();

}

var submit = document.getElementsByTagName('button')[0];

submit.onclick = savedata;