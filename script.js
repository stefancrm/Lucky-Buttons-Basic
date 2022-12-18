//Generate lucky number
function luckyNumber() {
	return Math.floor(Math.random() * 3 + 1);
}
let luckyNr
//on page load generate lucky number
window.onload = function() {
	luckyNr = luckyNumber()
	console.log(luckyNr)
  };

// function for guessing the lucky number
function guess(n) {
	console.log(n + " " + luckyNr);
	return n == luckyNr ? 
		window.alert("You guessed it right\nCongratulations!") : 
		window.alert("You guessed wrong\nTry Again!")
}

