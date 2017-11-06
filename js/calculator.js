var firstDigit = parseFloat(prompt("Please enter first number"));
var secondDigit = parseFloat(prompt("Please enter second number"));
var operation = parseInt(prompt("Select the operation you want to do\n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4. Division"));

function calculator(operation){
	switch (operation) {
		case 1:
			sum(firstDigit,secondDigit);
			break;
		case 2: 
			substraction(firstDigit, secondDigit);
			break;
		case 3:
			multiply(firstDigit, secondDigit);
			break;
		case 4:
			division(firstDigit, secondDigit);
			break;
		default:
			alert("Ingresa una operacion valido");
			break;
	}
}

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

calculator(operation);

/*sum(firstDigit, secondDigit);
substraction(firstDigit, secondDigit);
multiply(firstDigit, secondDigit);
division(firstDigit, secondDigit);*/