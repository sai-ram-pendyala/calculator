let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('#input');
let lastValue;
let operator;

function operate(e) {
    let button = e.target;
    let value = button.value;
    // console.log(value);
    // console.log(lastValue, operator, display.value);

    if(value === '+' || value === '-' || value === '*' || value === '/') {
        lastValue = display.value;
        operator = value;
        display.value = '';
    }

    else if(value === '=') {
        let res = 0;
        if(operator === '+') {
            res = parseFloat(lastValue) + parseFloat(display.value);
        }

        else if(operator === '-') {
            res = parseFloat(lastValue) - parseFloat(display.value);
        }

        else if(operator === '*') {
            res = parseFloat(lastValue) * parseFloat(display.value);
        }

        else if(operator === '/') {
            res = parseFloat(lastValue) / parseFloat(display.value);
        }

        lastValue = res;
        display.value = res;
    }

    else if(value === 'C') {
        display.value = '';
        lastValue = '';
        operator = '';
    }

    else {
        display.value += value;
    }
}

buttons.forEach(button => button.addEventListener('click', operate));