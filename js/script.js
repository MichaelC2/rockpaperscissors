// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("button").click(function() {
    let choice = $("#input").val()
    $("#userChoice").html(choice)
    let randomNumber = Math.random();
    randomNumber = randomNumber * 10
    let comChoice = computerChoice(randomNumber)
    $("#computerChoice").html(comChoice)
})

function computerChoice(number) {
  if(number >= 6) {
    return "rock"
  } 
  if (number < 6 && number > 3) {
    return "paper"
  } else if (number <= 3) {
    return "scissors"
  } 
  
} 

function theResults() {
    if ()
}



let randomVar = Math.random();
randomVar = randomVar * 10;
