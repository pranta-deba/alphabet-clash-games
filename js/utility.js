function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function getRandomAlphabet() {
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStr.split("");
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);
    const alphabet = alphabets[index];
    return alphabet;
}
function addBackgroundColorById(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-400');
}