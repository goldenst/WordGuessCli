

function letter(value) {
  this.letter = value;
  this.gussed = false;

  this.toString = function () {
    if (this.letter === " ") {
      this.gussed = true;
      return " ";
    } else {
      if (this.gussed === false) {
        return " ";
      } else {
        return this.letter
      }
    }
  };

  this.guess = function(guess) {
    if (guess === this.letter) {
      this.guesed = true;
    }
  }
}

module.exports = Letter;