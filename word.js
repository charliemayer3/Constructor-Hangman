// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter.js");

var Word = function(randomWord) {
	this.letterBoolean = false;
	this.string = [];
	this.letterArray = [];
	for (var i = 0; i < randomWord.length; i++) {
		// var newLetter = new Letter("randomWord[i]");
		// var showOrHide = newLetter.show(randomWord[i])
		this.letterArray.push(randomWord[i])
	}

	this.createVisual = function() {
		for (var j = 0; j < this.letterArray.length; j++) {
			var newLetter = new Letter(this.letterArray[j]);
			var showOrHide = newLetter.show(this.letterArray[j])
			this.string.push(showOrHide);
		}
		console.log(this.string.join(" "))
	}

	this.checkGuess = function(userGuess) {
		this.letterBoolean = false;
		// console.log(this.letterBoolean)
		// console.log(string[0])
		for (var g = 0; g < this.letterArray.length; g++) {
			// console.log(g)
			this.newLetter = new Letter(this.letterArray[g]);
			this.isCorrect = this.newLetter.check(userGuess);
			// this.letterBoolean = this.newLetter.correct;
			if (this.newLetter.correct === true) {
				this.letterBoolean = true;
				// console.log(this.letterBoolean)
				for (var h = 0; h < this.string.length; h++) {
					this.string[g] = userGuess;
					// console.log(string.join(" "))
				}

			} //else {
			// 	this.letterBooleanF === false;
			// }

		}
		// string += showOrHide
		console.log(this.string.join(" "))	
	}

	// console.log(string)
	// console.log(this.letterArray)

}

// var First = new Word()
// First.checkGuess("E")
// console.log(string)

module.exports = Word;