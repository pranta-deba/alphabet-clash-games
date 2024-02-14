const playNow = document.getElementById("playNow");

function continueGame(){
    const alphabet = getRandomAlphabet();
    document.getElementById('alphabetDisplay').innerText = alphabet.toUpperCase();
    addBackgroundColorById(alphabet);
}

playNow.addEventListener("click", () => {
  hideElementById("homeSection");
  showElementById("play-ground");
  continueGame();
});
