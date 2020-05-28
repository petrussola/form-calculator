const form = document.getElementById('form');
const operand1 = document.getElementById('operand1');
const operator = document.getElementById('operator');
const operand2 = document.getElementById('operand2');
const output = document.getElementById('form-output');

// operate function
function operate(operand1, operand2, operator) {
	const num1 = parseFloat(operand1, 10);
	const num2 = parseFloat(operand2, 10);
	console.log(num1);
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

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const result = operate(operand1.value, operand2.value, operator.value);
	const place = output.querySelector('h1');
	place.innerText = result.toLocaleString();
});
