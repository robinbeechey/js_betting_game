  // ask if you want to play
  // check to see if they entered a number else enter again
  // ask for bet amount 
  // ask for guess
  // generate number 
  // compare guess with number and change or not the intial ammount
  // continue until initial ammount is 0 

  // function 1 = grab guess and random number and return appropiate calculation



function getRandomNumber() {
  var randomNum = Math.floor((Math.random() * 10) + 1);
  return randomNum;
}


function getBet() {
  var bet = prompt("Place your bet ($5-$10)");
  return bet;
}

function getGuess() {
  var guess = prompt("Enter a number between 1-10");
  return guess;
}


function calculatorMachine(guess, number) {
  if (guess == number ) {
    startingCash += (bet * 2);
    console.log("You $" + bet);    
    console.log("Your guess is " + guess);
    console.log("Corrent Answer " + number);
    console.log("Total left " + startingCash);
  } else if ((guess > number + 1) || (guess < number - 1)) {
    startingCash -= bet;
    console.log("You $" + bet);  
    console.log("Your guess is " + guess);
    console.log("Corrent Answer " + number);
    console.log("Total left " + startingCash);
  } else {
    console.log("You $" + bet);  
    console.log("Your guess is " + guess);
    console.log("Corrent Answer " + number);
    console.log("Total left " + startingCash);
  }
}

var startingCash = 100;
var play = false;
var input = prompt("would you like to play ?");

if (input === 'y') {
  play = true;
}

while (startingCash > 0 && play === true) {  
  number = getRandomNumber();
  bet = getBet();
  guess = getGuess();
  document.getElementById("guess").innerHTML=guess; 
  answer = calculatorMachine(guess,number);
  document.getElementById("total_cash").innerHTML=startingCash; 
}


  // var startingCash = 100;
  // var play = false;
  // var input = prompt("would you like to play ?");

  // if (input === 'y') {
  //   play = true;
  // }

  // while (startingCash > 0 && play === true) {
  // var numberGenerator = Math.floor((Math.random() * 10) + 1);
  

  // var bet = prompt("Place your bet ($5-$10)");
  // var guess = prompt("Enter a number between 1-10");
  // if (guess == numberGenerator ) {
  //   startingCash += (bet * 2);
  //   console.log("Your guess is " + guess);
  //   console.log("Corrent Answer " + numberGenerator);
  //   console.log("Total left " + startingCash);
  // } else if ((guess > numberGenerator + 1) || (guess < numberGenerator - 1)) {
  //   startingCash -= bet;
  //   console.log("Your guess is " + guess);
  //   console.log("Corrent Answer " + numberGenerator);
  //   console.log("Total left " + startingCash);
  // } else {
  //   console.log("Your guess is " + guess);
  //   console.log("Corrent Answer " + numberGenerator);
  //   console.log("Total left " + startingCash);
  // }
  // }





