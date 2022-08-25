const operator = prompt('Type which opertor do you wanna use (+,-,*,/)');

const number1 = parseFloat(prompt('Type the first number'));
const number2 = parseFloat(prompt('Type the second number'));

let result;

if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '*') {
    result = number1 * number2;
} else {
    result = number1 / number2;
}

console.log(`The result is ${result}`);