const Letter = require("./Letter");

class Word {
  constructor(word) {
      this.letters = word.split("").map(character => new Letter(character))
  }
  guessLetter(character) {
      let correctLetter = false;
      this.letters.forEach(letter => {
          if(letter.guess(character)) {
              correctLetter = true;
          }
      });
      return correctLetter;
  }

  guessedCorrectly() {
    return this.letters.every(letter => letter.visible)
}
    toString() {
        return this.letters.join(" ")
    }
}

module.exports = Word;
