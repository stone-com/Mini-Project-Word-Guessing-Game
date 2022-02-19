class Letter {
  constructor(character){
      this.visable = !/[a-z1-9]/.test(character);
      this.character = character;
  }

  guess(characterGuess) {
      if(characterGuess.toUpperCase() === this.character.toUpperCase()) {
          this.visable = true;
          return true;
      } else {
          return false;
      }
  }

  toString() {

  }
}

module.exports = Letter;
