


let accum = 0;
let current = 0;
let oper =  '';
let decimal = false;
let deciDisplay = '0';


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


//  Test if a string of number, strNum, contains the decimal point.
function isDeci(strNum) {
    return strNum.includes('.');
}

//  Event listener for the number buttons.
nums.forEach(num => num.addEventListener('click', () => {

    if (!isDeci(deciDisplay)) {  
        current = current * 10 + Number(num.textContent);
        deciDisplay = current.toString();
    } else {
        deciDisplay += num.textContent;
        current = Number(deciDisplay);
        
    }

    displayNum(current);
  
}));


//  Event listener for operator buttons;

const ops = document.querySelectorAll('.oper');
ops.forEach(op => op.addEventListener('click', () => {
    
    const classL = op.classList;
    
    if (!classL.contains('eqto')) {
        //  When an operator is hit, move the current number to accumulated number
        accum = operate(accum, current, oper);
        displayNum(accum);

        if (classL.contains('divide')) {
            oper = '/';
        } else if (classL.contains('multi')) {
            oper = '*';
        } else if (classL.contains('plus')) {
            oper = '+';
        } else {
            oper = '-';
        }
        
        //  Syncing the current number and deciDisplay
        current = 0;
        deciDisplay = '0';

    } else {
        accum = operate(accum, current, oper);
        displayNum(accum);
        current = 0;
        
    }

}));


//  "Clear" button
const clearB = document.querySelector('.clear');
clearB.addEventListener('click', () => {
    accum = 0;
    current = 0;
    oper = '';
    digit.textContent = 0;
    deciDisplay = '0';

});

// "Back" button
const backB = document.querySelector('.back');
backB.addEventListener('click', () => {
    current = 0;
    displayNum(current);
});



//  ".", the decimal button
const deciB = document.querySelector('.deci');
deciB.addEventListener('click', () => {
    if (isDeci(deciDisplay)) return;
    else {
        deciDisplay += '.';
        digit.textContent = deciDisplay;
    }
   
});

