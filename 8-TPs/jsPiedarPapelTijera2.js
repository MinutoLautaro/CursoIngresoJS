var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	var max;
	var min;

	max = 4;
	min = 1;

	//function obtenerRando(min, max);
	eleccionMaquina = Math.round(Math.random() * (max - min) + min);
	console.log(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra()
{
	

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	comenzar()
}