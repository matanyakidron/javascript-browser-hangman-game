const wordDisplay = document.getElementById('word-display');
const invalidLettersDisplay = document.getElementById('incorrect-letters');
const livesDisplay = document.getElementById('lives'); 
const alphabetButtonContainer = document.getElementById('alphabet-buttons'); 
const resetButton = document.getElementById('reset-button'); 


const words = ['hooper', 'basket', 'jersey', 'fouled'];
let chosenWord = ''; 
let guessedLetters = [];
let invalidGuesses = [];
let lives = 6; 

