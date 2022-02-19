const Letter = require("./Letter");
//this will create an array of letter objects from the wordss
class Word {
  constructor(word) {
      //splits the words into array of letters, then maps over the array turning each letter into a new instance of Letter object
      this.letters = word.split("").map(character => new Letter(character))
  }

  //checks to see if the users guess matches any letters in the array, and sets the correctLetter variable to true if so.
  guessLetter(character) {
      let correctLetter = false;
      this.letters.forEach(letter => {
          if(letter.guess(character)) {
              correctLetter = true;
          }
      });
      //returns the correctLetter variable value as true or false depending on match
      return correctLetter;
  }
  //this returns true if the user correctly guessed all the letters
  guessedCorrectly() {
    return this.letters.every(letter => letter.visible)
}
    toString() {
        return this.letters.join(" ")
    }
}

module.exports = Word;
