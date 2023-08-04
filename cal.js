let accum = '';
let current = '';
let oper =  '';


function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(num1, num2, op) {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return substract(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    } else if (op === '/') {
        return divide(num1, num2)
    } else {
        return num2;
    }
}

const nums = document.querySelectorAll('.number');
const digit = document.querySelector('.digits');

function displayNum(num) {
    digit.textContent = num;
}


nums.forEach(num => num.addEventListener('click', () => {
    current += num.textContent;
    displayNum(current);
}));


const ops = document.querySelectorAll('.oper');
ops.forEach(op => op.addEventListener('click', () => {
    
    const classL = op.classList;
    console.log(classL);
    
    if (!classL.contains('eqto')) {
        accum = operate(Number(accum), Number(current), oper);
        displayNum(accum);
        //console.log(`accum: ${accum}`);
        //console.log(`current: ${current}`);
        //console.log(`oper: ${oper}`);
        if (classL.contains('divide')) {
            oper = '/';
        } else if (classL.contains('multiply')) {
            oper = '*';
        } else if (classL.contains('plus')) {
            oper = '+';
        } else {
            oper = '-';
        }

        current = '';

    } else {
        accum = operate(Number(accum), Number(current), oper);
        displayNum(accum);
        current = '';
        
    }

}));



