// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


// Generate eventListener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;  // urnary operator + casts string to number
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasSymbol, hasNumber, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Initialize pw variable
    // 2. Filter out unchecked types
    // 3. Loop over length, call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    console.log('typesCount: ', typesCount);
}


// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}<>?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

