$(".attend-btn").on("click", function (){
    var btnPressed = $(".attend-btn").addClass("attend-btn-pressed");
    if(btnPressed)
    {
        var nameInput = $(".name_input").val();
        var finalDecision = analyseNameInput(nameInput);
        $(".attendance-list p").slideUp();
        $(".attendance-list .gif").show();
        setTimeout(function (){
            $(".attendance-list .gif").hide();
        }, 5900);
        setTimeout(function (){
            $(".attendance-list .gif").text(finalDecision).show();
        }, 5900);
   



    } 
    setTimeout(function (){
        $(".attend-btn").removeClass("attend-btn-pressed")
    }, 3000);
});

function analyseNameInput(attendee) {

    var fd = [];
    for(var i = 0; i < attendee.length; i++){
        if(attendee[i] === 'e'){
            fd.push(attendee[i]);
            continue;   
        }      
     }
    if(fd.length > 1){
        return fd = "sorry, its nothing personal."
    }else  if (fd.length == 1){
        return fd = "You are lucky paa, to be invited, next time you shall see."
    }else {
        return fd = "Welcome, " + attendee;
    }
}

