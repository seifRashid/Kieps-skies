let displayValue = 0;
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
    console.log(`Number pressed is ${number}`);

    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === 0 ? number : displayValue + number;
    }

    console.log(`Display value is ${displayValue}`);
}

function setOperation (){

}

function calculate() {

}

function appendDecimal() {

}

function clearDisplay() {

}

function updateDisplay() {
}