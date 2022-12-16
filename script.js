// function for guessing the lucky number
function guess(n) {
	console.log(n + " " + luckyNumber());
	return n == luckyNumber() ? 
		window.alert("You guessed it right\nCongratulations!") : 
		window.alert("You guessed wrong\nTry Again!")
}
//Generate lucky number
function luckyNumber() {
	return Math.floor(Math.random() * 3 + 1);
}
