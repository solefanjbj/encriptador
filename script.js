//e-->enter
//o-->ober
//i-->imes
//a-->ai
//u-->ufat
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textCifrado = texto.replace (/e/igm,"enter");
    var textCifrado = textCifrado.replace (/o/igm,"ober");
    var textCifrado = textCifrado.replace (/i/igm,"imes");
    var textCifrado = textCifrado.replace (/a/igm,"ai");
    var textCifrado = textCifrado.replace (/u/igm,"ufat");
    document.getElementById ("imgDer").style.display="none";
    document.getElementById ("texto").style.display="none";
    document.getElementById ("texto2").innerHTML =textCifrado;
    document.getElementById ("copiar").style.display="show";
    document.getElementById ("copiar").style.display="inherit";
}
function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textCifrado = texto.replace (/enter/igm,"e");
    var textCifrado=textCifrado.replace (/ober/igm,"o");
    var textCifrado=textCifrado.replace (/imes/igm,"i");
    var textCifrado=textCifrado.replace (/ai/igm,"a");
    var textCifrado=textCifrado.replace (/ufat/igm,"u"); 
    document.getElementById ("imgDer").style.display="none";
    document.getElementById ("texto").style.display="none";
    document.getElementById ("texto2").innerHTML =textCifrado;
    document.getElementById ("copiar").style.display="show";
    document.getElementById ("copiar").style.display="inherit";   
} 
function copy(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand ("copy");
    alert ("¡copiado con exito!");
    
}