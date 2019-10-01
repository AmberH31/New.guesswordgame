// global variables
// ================================================================
var wordOptions = ["lover", "red", "reputation", "babe"];
var selectWords = "";
var lettersInWords = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessLeft = 15;
1;
// Functions
// ================================================================

function startGame() {
  choseWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersInWords = choseWord.split("");
  numBlanks = lettersInWords.length;

  guessLeft = 15;
  wrongLetters = [];
  blankAndSuccesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blankAndSuccesses.push("_");
  }

  //   console.log(choseWord);
  //   console.log(lettersInWords);
  //   console.log(numBlanks);
  //   console.log(blankAndSuccesses);

  document.getElementById("guessSong").innerHTML = blankAndSuccesses.join(" ");
  document.getElementById("remainingCount").innerHTML = guessLeft;
  document.getElementById("lossCount").innerHTML = lossCount;
  document.getElementById("winCount").innerHTML = winCount;
}

function checkLetters(letter) {
  var isLetterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (selectWords[i] == letter) {
      isLetterInWord = true;
      alert("alert found");
    }
  }

  if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
      if (selectWords[i] == letter) {
        blankAndSuccesses[i] = letter;
      }
    }
  } else {
    wrongLetters.push(letter);
    guessLeft--;
  }
}
function roundComplete() {
  //   console.log(
  //     "win Count " +
  //       winCount +
  //       "Lose Count " +
  //       lossCount +
  //       "Guesses Left" +
  //       guessLeft
  //   );

  document.getElementById("remainingCount").innerHTML = guessLeft;
  document.getElementById("guessSong").innerHTML = blankAndSuccesses.join(" ");
  document.getElementById("alreadyGuess").innerHTML = wrongLetters.join(" ");
  document.getElementById("lossCount").innerHTML = lossCount;

  if (lettersInWords.toString() == blankAndSuccesses.toString()) {
    winCount++;
    alert("<3");
    document.getElementById("winCount").innerHTML = winCount;
    startGame();
  } else if (guessLeft == 0) {
    lossCount++;
    alert("You lost!");
    startGame();
  }
}

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(letterGuessed);
  checkLetters(letterGuessed);
  roundComplete();
};

startGame();
