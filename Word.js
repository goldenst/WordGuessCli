var Letter = require ("./Letter.js");

function Word(awnser) {
  this.objArray = [];

  for (var i = 0; i < awnser.length; i++) {
    var letter = new Letter(awnser[i]);
    this.objArray.push(letter);
  }

  this.log = function() {
    var awnserlog = "";
    for (var i = 0; i< this.objArray.length; i++) {
      awnserlog += this.objArray[i]+ " ";
    }
    console.log(awnserlog, "\n---------------------\n")
  }

  this.userGuess = function(input) {
    for (var i = 0; i < this.objArray.length; i++) {
      this.objArray[i].guess(input);
    }
  }
}

module.exports = Word;