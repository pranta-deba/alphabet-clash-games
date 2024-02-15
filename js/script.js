const playNow = document.getElementById("playNow");
const playAgain = document.getElementById("playAgain");

document.addEventListener("keyup", (e) => {
  const playerAlphabet = e.key;
  if (playerAlphabet === 'Escape') {
    gameOver();
    
  }
  const diplayAlphabet = document.getElementById("alphabetDisplay").innerText.toLowerCase();
  if (playerAlphabet === diplayAlphabet) {
    const presentScore = getElementToInnerNumberById("scoreBoard");
    const score = presentScore + 1;
    setElementInnerText("scoreBoard", score);
    removeBackgroundColorById(diplayAlphabet);
    continueGame();
  } else {
    const presentLife = getElementToInnerNumberById("lifeBoard");
    const life = presentLife - 1;
    setElementInnerText("lifeBoard", life);
    if (life === 0) {
      gameOver();
    }
  }
});

function continueGame() {
  const alphabet = getRandomAlphabet();
  document.getElementById("alphabetDisplay").innerText = alphabet.toUpperCase();
  addBackgroundColorById(alphabet);
}
function play(){
  hideElementById("homeSection");
  hideElementById("final-score-board");
  showElementById("play-ground");
  setElementInnerText("scoreBoard", 0);
  setElementInnerText("lifeBoard", 5);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score-board");
  const finalScore = getElementToInnerNumberById('scoreBoard');
  setElementInnerText('finalScore', finalScore);
  const currentAlphabet = getElementTextById('alphabetDisplay');
  removeBackgroundColorById(currentAlphabet.toLowerCase());
}

playNow.addEventListener("click", play);
playAgain.addEventListener('click', play);