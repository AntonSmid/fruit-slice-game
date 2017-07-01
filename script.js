var playing = false;
var score;
var trialsleft;

$(function(){
    // click on start reset button
    $("#startreset").click(function(){
    // are we playing?
        // yes
        if (playing == true) {
            // reload page
            location.reload();
        } else { 
        // no
        playing = true; // game iniciated
        // set score to 0
        score = 0;
        $("#scorevalue").html(score);
            
        // show trials left
        $("#trialsleft").show();
        trialsleft = 3;
        addHearts();
        
            
            
        }
    })
    
    
    
}); // enf of ready function


function addHearts() {
    for (var i = 0; i < trialsleft; i++) {
            $("#trialsleft").append("  X  ");
    }
}

/* Whole code */
// click on start reset button
    // are we playing?
        // yes
            // reload page
        // no
            // show trials left
            // change button text to #reset game"
            // 1. create a random fruit
            // define a random step
            // 2. move fruit down one step every 30sec
                // is fruit too low?
                    // no -> repeat No2
                    // yes -> any trials left?
                        // yes: - remove 1heart, repeat No1
                        // no: - show game over, button text: "Start game"

// Slice fruit
    // play sound
    // explode fruit
    // increase score by one

/* +++++++++ end ++++++++ */

