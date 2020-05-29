const form = document.getElementById('form');
const operand1 = document.getElementById('operand1');
const operator = document.getElementById('operator');
const operand2 = document.getElementById('operand2');
const output = document.getElementById('form-output');

// show Error
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	console.log(small);
	small.innerText = message;
}

// operate function
function operate(operand1, operand2, operator) {
	const num1 = parseFloat(operand1, 10);
	const num2 = parseFloat(operand2, 10);
	switch (operator) {
		case 'add':
			return num1 + num2;
		case 'subtract':
			return num1 - num2;
		case 'multiply':
			return num1 * num2;
		case 'divide':
			return num1 / num2;
	}
}

// check if number
function isNumber(operand) {
	const notNumber = isNaN(operand.value);
	if (notNumber) {
		showError(operand, `${operand.id} should be a number`);
		return false;
	}
	return true;
}

function printResult(number) {
	const place = output.querySelector('h1');
	if (number === '--') {
		place.innerText = number;
	} else {
		place.innerText = number.toLocaleString();
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const checkOperand1 = isNumber(operand1);
	const checkOperand2 = isNumber(operand2);
	if (checkOperand1 && checkOperand2) {
		const result = operate(operand1.value, operand2.value, operator.value);
		printResult(result);
	} else {
		printResult('--');
	}
});
