// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
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

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Initialize pw variable
    // 2. Filter out unchecked types
    // 3. Loop over length, call generator function for each type
    // 4. Add final pw to the pw var and return

    let passwordGenerated = "";
    const typesCount = lower + upper + number + symbol;

    // create an array of objects, filtering out unchecked types, passing in the first item of the arr
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]); 

    //console.log(typesArr);

    if (typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log('funcName: ', funcName);

            passwordGenerated += randomFunc[funcName]();
        });
    }
    return passwordGenerated.slice(0, length);

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

