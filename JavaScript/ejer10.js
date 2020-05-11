/* -- EJERCICIO 10 -- Definir una función que determine si la cadena 
de texto que se le pasa como parámetro es un palíndromo, es decir, si 
se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo 
de palíndromo complejo: "La ruta nos aporto otro paso natural".*/

//var inTxt = prompt("Entroduce una palabra o frase \npara saber si es o no un palíndromo");
//var inTxt = "La ruta nos aporto otro paso natural";
var inTxt = "Esto no es un palindromo";
inTxt = inTxt.toLowerCase();

function palin (toAnalis){
	var arrTxt = toAnalis.split(" ");
	arrTxt = arrTxt.join("");

	var comparacion= toAnalis.split("");
	comparacion= comparacion.reverse();
	comparacion= comparacion.join("");

	var compFinal= comparacion.split(" ");
	compFinal= compFinal.join("");

	var arrLen = comparacion.length;

	document.write(arrLen + " -----> " + arrTxt + " -----> " + compFinal);


		if (arrTxt == compFinal) {
			document.write("Si que lo es.... sí...");
		} else {
			document.write("No que lo es.... no...");
		}
	
}

if(inTxt != " "){
	palin(inTxt);
}
