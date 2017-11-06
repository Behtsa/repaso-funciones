var firstDigit = parseFloat(prompt("Please enter first number"));
var secondDigit = parseFloat(prompt("Please enter second number"));

function sum(firstDigit, secondDigit) {
	var result = firstDigit + secondDigit; 
	return document.write("El resultado de la suma es: " + result + "<br>");
}

function substraction(firstDigit, secondDigit) {
	var result = firstDigit - secondDigit;
	return document.write("El resultado de la resta es: " + result + "<br>");
}

function multiply(firstDigit, secondDigit) {
	var result = firstDigit * secondDigit;
	return document.write("El resultado de la multiplicacion es: " + result + "<br>");
}

function division(firstDigit, secondDigit) {
	var result = firstDigit / secondDigit;
	return document.write("El resultado de la division es: " + result + "<br>")
}

sum(firstDigit, secondDigit);
substraction(firstDigit, secondDigit);
multiply(firstDigit, secondDigit);
division(firstDigit, secondDigit);