  // ask if you want to play
  // check to see if they entered a number else enter again
  // ask for bet amount 
  // ask for guess
  // generate number 
  // compare guess with number and change or not the intial ammount
  // continue until initial ammount is 0 

  // function 1 = grab guess and random number and return appropiate calculation
  //check, bet plus remainder t










$(function() {


function getRandomNumber() {
  var randomNum = Math.floor((Math.random() * 10) + 1);
  return randomNum;
}

// function getBet() {
//   var bet = prompt("Place your bet ($5-$10)");
//   return bet;
// }

// function getGuess() {
//   var guess = prompt("Enter a number between 1-10");
//   return guess;
// }

// function getInputStart() {
//   var input = prompt("would you like to play ?");
//   return input;
// }

// function getPlayerInput() {

// };
 

var startingCash = 100;
var play = true;

$('#start').on('click', function() {
  $("#start").toggleClass('start2').toggleClass('#start');
  if (startingCash > 0) {
    var userGuess = $('.guess').val();
    var answer = getRandomNumber();
    bet = $('.bet').val();
    if (userGuess == answer ) {
    startingCash += (bet * 2);
    console.log("Your bet $" + bet);    
    console.log("Your Guess is " + userGuess);
    console.log("Corrent Answer " + answer);
    $('.cash').text('$' + startingCash).innerHTML;
    console.log("Total left " + startingCash);
    $('.play').text('YES! ' + answer).innerHTML;
  } else if ((userGuess > answer + 1) || (userGuess < answer - 1)) {
    startingCash -= bet;
    console.log("Your bet $" + bet);  
    console.log("Your guess is " + userGuess);
    console.log("Corrent Answer " + answer);
    $('.cash').text('$' + startingCash).innerHTML;
    $('.cash').text('$' + startingCash).innerHTML;
    console.log("Total left " + startingCash);
    $('.play').text('Wrong ' + answer).innerHTML;
  } else {
    console.log("Your bet $" + bet);  
    console.log("Your guess is " + userGuess);
    console.log("Corrent Answer " + answer);
    $('.cash').text('$' + startingCash).innerHTML;
    console.log("Total left " + startingCash);
    $('.play').text('Off by one! ' + answer).innerHTML;

  }
  } else {

  }
})





});








