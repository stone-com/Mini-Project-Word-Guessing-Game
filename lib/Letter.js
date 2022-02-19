class Letter {
  constructor(character){
      this.visible = !/[A-Za-z1-9]/.test(character);
      this.character = character;
  }

  guess(characterGuess) {
      if(characterGuess.toUpperCase() === this.character.toUpperCase()) {
          this.visible = true;
          return true;
      } else {
          return false;
      }
  }

  toString() {
    if(this.visible === true) {
        return this.character;
    }
    return '_';
  }

  getSolution() {
      return this.character;
  }
}

module.exports = Letter;
