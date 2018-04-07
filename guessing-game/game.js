var secretNumber = 4;

var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber) {
	alert("you got it right!");
}

else if(guess > secretNumber) {
	alert("too high!");
}

else {
	alert("too low!");
}