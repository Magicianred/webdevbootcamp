var secretNumber = Math.floor((Math.random() * 11) + 1);

while(guess !== secretNumber){
	var guess = Number(prompt("Guess a number between 0 and 10:"));

	if(guess=== secretNumber) {
		alert("Congratulations! You win!");
	}

	else if(guess > secretNumber) {
		var guess = alert("You guess was too high. Try again!");
	}

	else{
		var guess = alert("You guess was too low. Try again!");
	}
}