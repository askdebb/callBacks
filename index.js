var sendBtn = $("button");
console.log(sendBtn);

var answer = btnRes(sendBtn, analyseNameInput);
$(".attendance-list").text(answer).show();


//creating a callback function

function btnRes (btn, _res){
    btn.on("click", function (){
        $(".attend-btn").addClass("attend-btn-pressed"); 
        var nameInput = $(".name_input").val();      
       
        
        // function gets called: analyseeNameInput()
        var finalDecision = analyseNameInput(nameInput);
        setTimeout(function (){
            $(".attend-btn").text("Attending");
            $(".attend-btn").removeClass("attend-btn-pressed");
        }, 500);
        
        startAnimation();  
        setTimeout(function (){
            $(".attendance-list p").text(finalDecision).show();
            $(".attend-btn").text("Attend");
        }, 5900);
        endAnimation(); 
    });
}

function startAnimation (){
    $(".attendance-list p").hide();
    $(".attendance-list .gif").show();
    setTimeout(function (){
        $(".attendance-list .gif").hide();
    }, 5900);
}
function endAnimation (){
    $(".attendance-list p").text("No attendees yet ...").show();
    startAnimation();
}


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
    } else if (attendee.length === 0){
        console.log("attende is: " + attendee);
        return fd = "You entered nothing in the field."
    }
    else {
        return fd = "Welcome, " + attendee;
    }
}

