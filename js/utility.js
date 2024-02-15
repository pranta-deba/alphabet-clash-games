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
function removeBackgroundColorById(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400');
}
function getElementToInnerNumberById(elementId) {
    const element = document.getElementById(elementId);
    const StrValue = element.innerText;
    const num = parseInt(StrValue);
    return num;
}
function setElementInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getElementTextById(elemntId) {
    const element = document.getElementById(elemntId);
    return element.innerText;
}