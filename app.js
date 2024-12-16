let display = document.getElementById('display');
let result = '';

function displayValue(value) {
    result += value;
    display.value = result;
}

function clearDisplay() {
    result = '';
    display.value = result;
}

function deleteChar() {
    result = result.slice(0, -1);
    display.value = result;
}

function calculate() {
    try {
        result = eval(result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
