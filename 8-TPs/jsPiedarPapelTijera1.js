/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	var max
    var min
    max = 3
    min = 1
    
    eleccionMaquina = Math.round(Math.random () * (max - min) + min)
    console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina = 1){
        case 1:
        alert("empato");
        break;
        case 2:
        alert("perdio");
        break;
        case 3:
        alert("gano");
    }

}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN