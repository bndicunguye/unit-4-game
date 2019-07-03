// to declare variables to use
var targetNumber 
var wins =0;
var loses =0;
var counter

// set up a reset function which run every time the game restart
function reset(){
    // set up counter for score point and tagetNumber for picking random number between19-120
counter = 0;
targetNumber=Math.floor(Math.random()*112)+19
// set up jquery to display targetNumber,wins,loses,and score to the user
$("#number-to-guess").text(targetNumber);
$("#Wins").text(wins);
$("#Loses").text(loses);
$("#score").text(counter);
// set up jquery empty methode to remove crystals
$("#crystals").empty()
// set up for loop to keep run code
for (var i = 0; i < 4; i++) {

    // set up variable imagecrystal to create a new image
    var imageCrystal = $("<img>");

    // adding class to the crystal-image in order to use CSS
    imageCrystal.addClass("crystal-image");
  
    // set up a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
  
    
    // set up data attribute to the imagecrystal with value between 1-12
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12)+1);
  
    // adding crystal image to the page
    $("#crystals").append(imageCrystal);
  }
}
reset()


// set up .on click function to execute each time you click to the crystal image.
$(document).on("click",".crystal-image", function() {


// set up $this. keyword to refer the crystal value of the clicked crystal and .attr("data-crystalvalue")will get the value from data-crystalvalue
  var crystalValue = ($(this).attr("data-crystalvalue"));
// set up parseInt to convert strings into numbers to add to to the counter
  crystalValue = parseInt(crystalValue);

//   set up the counter to the user so that every time they click on every crystal, counter get added and scrore displayed.

  counter += crystalValue;
$("#score").text(counter)

// set up conditions to determine win,loss and rest the game once win orr loss happened

  if (counter === targetNumber) {
    wins++
    reset()
  }

  else if (counter >= targetNumber) {
    loses++
    reset()
  }

});