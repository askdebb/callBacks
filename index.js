$(".attend-btn").on("click", function (){
    var btnPressed = $(".attend-btn").addClass("attend-btn-pressed");
    if(btnPressed)
    {
       
        var nameInput = $(".name_input").val();
        var finalDecision = analyseNameInput(nameInput);
        $(".attendance-list p").slideUp();
        setTimeout(function (){
            $(".attendance-list .gif").show();
        }, 400);
        console.log("NameInput: " + nameInput);
        console.log("NameInput length: " + nameInput.length);
        console.log("Final Decision: " + finalDecision);

    } 
    setTimeout(function (){
        $(".attend-btn").removeClass("attend-btn-pressed")
    }, 3000);
});

function analyseNameInput(attendee) {

    var fd = [];
    for(var i = 0; i < attendee.length; i++){
        
            if(attendee[i] === "e"){
                fd.push(attendee[i]);
               
            };
        
     }
     console.log("fd: " +fd);
     console.log("Letter 'e' in ("+ attendee +"): " + fd.length);
     
    }

