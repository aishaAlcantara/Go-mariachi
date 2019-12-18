
let nombre = document.getElementById ("Nombre");
let boton= document.getElementById ("Boton");
let direccion=document.getElementById ("Direccion");
let textNombre= document.getElementById ("TextNombre");
let mariachis=document.getElementById ("inputGroupSelect01");
let horario=document.getElementById ("Horario");



function mostrarMensaje () {
   alert( nombre.value + ", tu pedido se ha procesado correctamente"); 
}

function mostrarDir () {
   var numMariachis = mariachis.options[mariachis.selectedIndex].value;
   alert(  numMariachis + " mariachis llegaran a " + direccion.value + " a las " + horario.value ); 
}


