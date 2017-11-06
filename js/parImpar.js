var numero = 128; 

function comprobar (n){
	if(n % 2 === 0){
		console.log("par");
		return "par";
	}else{
		console.log("impar");
		return "impar";
	}
}

comprobar(numero);