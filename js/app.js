/*-------------- Constants -------------*/
const wordList = ["basket", "fouled", "jersey", "points", "guard"];

const wordDisplay = document.getElementById("word-display");

const guessesLeftDisplay = document.getElementById("guesses-left");

const wrongLettersDisplay = document.getElementById("wrong-letters");

const alphabetButtonsContainer = document.getElementById("alphabet-buttons");

const resetButton = document.getElementById("reset-button");

/*---------- Variables (state) ---------*/
let chosenWord = "";

let guessedLetters = [];

let wrongLetters = []; 

let lives = 6; 

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function initializeGame() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    guessedLetters = Array(chosenWord.length).fill('_'); 
    wrongLetters = [];
    lives = 6;

    updateDisplay();
    createAlphabetButtons();
    resetButton.style.display = 'none';
}


function updateDisplay() {
    wordDisplay.textContent = guessedLetters.join(' ');
    guessesLeftDisplay.textContent = `Lives: ${lives}`;
    wrongLettersDisplay.textContent = `wrong Letters: ${wrongLetters.join(', ')}`
}


/*----------- Event Listeners ----------*/

