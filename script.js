let display = document.getElementById('display');
let currentOperation = null;
let currentNumber = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(operation) {
    if (currentNumber === '') return;
    if (currentOperation !== null) {
        calculateResult();
    }
    currentOperation = operation;
    currentNumber += ' ' + operation + ' ';
    display.value = currentNumber;
}

function calculateResult() {
    if (currentNumber === '' || currentOperation === null) return;

    try {
        const result = eval(currentNumber);
        display.value = result;
        currentNumber = result.toString();
        currentOperation = null;
    } catch (e) {
        display.value = 'Error';
        currentNumber = '';
        currentOperation = null;
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    currentOperation = null;
}
