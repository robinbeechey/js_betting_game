
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
      $('.cash').text('$' + startingCash).innerHTML;
      $('.play').text('YES! ' + answer).innerHTML;
    } else if ((userGuess > answer + 1) || (userGuess < answer - 1)) {
      startingCash -= bet;
      $('.cash').text('$' + startingCash).innerHTML;
      $('.cash').text('$' + startingCash).innerHTML;
      $('.play').text('Wrong ' + answer).innerHTML;
    } else {
      $('.cash').text('$' + startingCash).innerHTML;
      $('.play').text('Off by one! ' + answer).innerHTML;
    }

    } else {

    }
})
});








