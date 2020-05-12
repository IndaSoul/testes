// EJERCICIO 11 ----->
// A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por
// pantalla la siguiente información:
// 1. Número de enlaces de la página ----- [DONE]
// 2. Dirección a la que enlaza el penúltimo enlace
// 3. Numero de enlaces que enlazan a http://linx
// 4. Número de enlaces del tercer párrafo  ----- [DONE]


var enlaces = document.getElementsByTagName("a");
var penultimo = (enlaces.length)-1;

var parrafos = document.getElementsByTagName("p");
var tercerPar = parrafos[3];
var AtercerPar = tercerPar.getElementsByTagName("a");

    // for (var i=0; i<enlaces.length; i++){
    // }

    console.log("Hay " + enlaces.length + " Enlaces en esta página");
    console.log("Y el tercer párrafo tiene " + AtercerPar.length + " Enlaces");
    //console.log(penultimo);

    document.write("Hay " + enlaces.length + " Enlaces en esta página</br>");
    document.write("Y el tercer párrafo tiene " + AtercerPar.length + " Enlaces");
    


