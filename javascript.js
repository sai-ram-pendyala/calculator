let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('#input');
let lastValue = 0;
let operator = '';

function operate(e) {
    let button = e.target;
    let value = button.value;
    console.log(value);
    
    if(value === '+' || value === '-' || value === '*' || value === '/') {
        if(operator !== '') {
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
        }
        
        else {
            lastValue = display.value;
        }
        
        display.value = '';
        operator = value;
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
    console.log(lastValue, operator, display.value);
}

buttons.forEach(button => button.addEventListener('click', operate));