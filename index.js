// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word.js");
var WordBank = require("./WordBank.js");

var randomWord = WordBank[Math.floor(Math.random() * WordBank.length)];
var NewWord = new Word(randomWord);
NewWord.createVisual(randomWord);


var guessLetter = function() {
	if (NewWord.string.join("") != randomWord) {
		console.log(randomWord)
		console.log(NewWord.string.join(""))

		inquirer.prompt([
		  {
		    name: "guess",
		    message: "Guess a letter!"
		  }//, {
		  //   name: "position",
		  //   message: "What is your current position?"
		  // }
		]).then(function(answers) {
			NewWord.checkGuess(answers.guess.toUpperCase());
			guessLetter();
		});

	} else {
		console.log("whippee")
	}
}

guessLetter();