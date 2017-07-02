var playing = false;
var score;
var trialsleft;
var step;
var action; // used for setInterval
var fruits = ["apple", "banana", "cherries", "grapes", "mango", "orange", "peach", "pear", "watermelon"];

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

    // hide game over box
    $("#gameOver").hide();

    // change button text to reset game
    $("#startreset").html("Reset Game");

    // start sending fruits
    startAction();    

    }
});
    
// slice a fruit
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); // update score
    
    // play sound - 2 nacina js in jQuery
    // document.getElementById("slicesound").play(); 
    $("#slicesound")[0].play();
    
    // stop fruit 
    clearInterval(action);
    
    //and hide it
    $("#fruit1").hide("explode", 150);
    
    // send new fruit
    setTimeout(startAction, 400);
    
});
    



function addHearts() {
    $("#trialsleft").empty();
    for (var i = 0; i < trialsleft; i++) {
            $("#trialsleft").append("<img class ='life' src='images/heart.png'>");
    }
}

// start sending fruits
function startAction() {
    
    // generate a fruit
    $("#fruit1").show();
    chooseFruit(); // choose a random fruit
    $("#fruit1").css({
        "left" : Math.round(550*Math.random()),
        "top" : -50
    });
    
    // generate a random step
    step = 1+Math.round(5*Math.random()); // change step
    
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);
        
        // check if fruit is to low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            // check if we have trials left
            if (trialsleft > 1) {
                // generate a fruit
                $("#fruit1").show();
                chooseFruit(); // choose a random fruit
                $("#fruit1").css({
                "left" : Math.round(550*Math.random()),
                "top" : -50
        });
    
        // generate a random step
        step = 1+Math.round(5*Math.random()); // change step
                
                // reduce trials by one
                trialsleft --;
                
                // populate  trialsLeft box
                addHearts();
                
                } else { // game over
                    playing = false;
                    $("#startreset").html("Start Game");
                    $("#gameOver").show();
                    $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                    $("#trialsleft").hide();
                    stopAction();
                }
            }
        }, 10);
    
}

// generate a random fruit
function chooseFruit() {
    $("#fruit1").attr('src' ,'images/'+ fruits[Math.round(8*Math.random())] +'.png');
}

// stop dropping fruits
function stopAction() {
    clearInterval(action);
    $("#fruit1").hide();
}
    
    

    
    
}); // enf of ready function

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

