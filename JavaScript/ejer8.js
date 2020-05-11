/* -- EJERCICIO 8 -- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado una cadena de texto que 
indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.*/

//var inpData = prompt("Escribe un número");
var inpData = 424;

 function  parInpar (numero){
 	numero = numero%2;
 	if (numero==1){
 		document.write("El número es impar");
 	} else if (numero==0) {
 		document.write("El número es par");
 	}
 }

 if(inpData > 0){
 	parInpar (inpData);
 }