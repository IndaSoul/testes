/* -- EJERCICIO 8 -- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado una cadena de texto que 
indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.*/

//var inpData = prompt("Escribe un número");

 /*function  parInpar (numero){
 	numero = numero%2;
 	if (numero==1){
 		document.write("El número es impar");
 	} else if (numero==0) {
 		document.write("El número es par");
 	}
 }

 if(inpData > 0){
 	parInpar (inpData);
 }*/

/* -- EJERCICIO 9 -- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, la 
función determina si esa cadena está formada sólo por mayúsculas, sólo 
por minúsculas o por una mezcla de ambas.*/

// var txtIntr = prompt("Escribe un texto con, sin o mezclando mayúsculas \n");

/*var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abc = ABC.toLowerCase();   // pasa abecedario a minúsculas

var abcArray = abc.split("");   // array abecedario minúscula
var ABCarray = ABC.split("");   // array abecedario mayúscula

var Mpos = false;
var mpos = false;

var TM = "Tienes mayúsculas ";
var tm = "Tienes minúsculas ";

function tipoTxt (txt){
	for (var i=0; i<26; i++){

		if(txt.indexOf(ABCarray[i])>=0){
			//document.write("Tienes mayúsculas \n");
			Mpos = true;
		}
		if(txt.indexOf(abcArray[i])>=0){
			//document.write("Tienes minúsculas \n");
			mpos = true;
		}		
	}

	if (Mpos && mpos) {
		document.write(TM + "y también " + tm);
	} else if (Mpos && !mpos) {
		document.write("Solo " + TM);
	} else if (!Mpos && mpos) {
		document.write("Solo " + tm);
	} else if (!Mpos && !mpos) {
		document.write("Arrrgo ha salido mal, xavá...")
	}

}

if (txtIntr != " "){
	tipoTxt(txtIntr);
}*/


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
