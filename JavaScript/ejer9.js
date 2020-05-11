/* -- EJERCICIO 9 -- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, la 
función determina si esa cadena está formada sólo por mayúsculas, sólo 
por minúsculas o por una mezcla de ambas.*/

// var txtIntr = prompt("Escribe un texto con, sin o mezclando mayúsculas \n");
var txtIntr = "Escribe un texto con, sin o mezclando mayúsculas";

var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
}