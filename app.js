
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

function winner() {
  var winnerMan = $('<h1 class="text-center winner">WINNER</h1>')
  winnerMan.appendTo('.winner');
  setTimeout(function() {
    winnerMan.remove();  
  }, 500);
  

};
 

var startingCash = 100;
var play = true;
var start =  $('#start')
$('.restartbutton').hide();
  start.on('click', function() {
    start.toggleClass('start2').toggleClass(start);
    setTimeout(function(){
    start.toggleClass('start2');
  },250);
    if (startingCash > 0) {

      var userGuess = $('.guess').val();
      var answer = getRandomNumber();
      bet = $('.bet').val();
      if (userGuess == answer ) {
      startingCash += (bet * 2);
      $('.cash').text('$' + startingCash).innerHTML;
      $('.play').text('YES! ' + answer).innerHTML;
      winner();
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
      $('.restartbutton').show().on('click', function(){
        startingCash = 100;
      });
      $('.cash').text('$100').innerHTML;
    }
})
});








