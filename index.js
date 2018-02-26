// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word.js");
var WordBank = require("./WordBank.js");

var randomWord = WordBank[Math.floor(Math.random() * WordBank.length)];
var NewWord = new Word(randomWord);
NewWord.createVisual(randomWord);
var guessesRemaining = 7;


var guessLetter = function() {
	if (NewWord.string.join("") != randomWord && guessesRemaining > 0) {

		inquirer.prompt([
		  {
		    name: "guess",
		    message: "Guess a letter!"
		  }
		]).then(function(answers) {
			if ((answers.guess.match(/^[a-zA-Z]+$/)) && (answers.guess.length === 1)) {
				NewWord.checkGuess(answers.guess.toUpperCase());
				// console.log(NewWord.letterBoolean)

				if (NewWord.letterBoolean === true) {
					console.log("Good guess!!")
				} else {
					console.log("Sorry, guess again!!")
					guessesRemaining --;
					console.log("Guesses Remaining: " + guessesRemaining)
				}

			guessLetter();

			} else {
				console.log("Please pick a letter.");
				guessLetter();
			}
		});

	} else if (NewWord.string.join("") === randomWord) {
		console.log("You win!!")
	} else if (guessesRemaining === 0) {
		console.log("You lose!!")
	}
}
console.log("Guess the TV Show!!")
guessLetter();