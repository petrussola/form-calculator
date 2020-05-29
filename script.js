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
	small.innerText = message;
}

// show Success
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
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

function isValidNumber(inputArr) {
	let allGood = true;
	inputArr.forEach((item) => {
		if (isNaN(item.value) || item.value === '') {
			allGood = false;
			showError(item, `${item.id} should be a number`);
			printResult('--');
		} else {
			showSuccess(item);
		}
	});
	return allGood;
}

// check if operator is selected
function isOperatorSelected(operator) {
	let allGood = true;
	if (operator.value === '') {
		allGood = false;
		showError(operator, `${operator.id} needs to be filled`);
		printResult('--');
	} else {
		showSuccess(operator);
	}
	return allGood;
}

// print result on the screen
function printResult(number) {
	const place = output.querySelector('h1');
	if (number === '--') {
		place.innerText = number;
	} else {
		place.innerText = number.toLocaleString();
	}
}

// event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const valid = isValidNumber([operand1, operand2]);
	const selected = isOperatorSelected(operator);
	if (valid && selected) {
		const result = operate(operand1.value, operand2.value, operator.value);
		printResult(result);
	}
});
