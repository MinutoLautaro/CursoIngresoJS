var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	var max;
	var min;

	max = 3;
	min = 1;

	//function obtenerRando(min, max);
	eleccionMaquina = Math.round(Math.random() * (max - min) + min);
	console.log(eleccionMaquina);
	mostrarResultado()
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina){
        case 1:
		ContadorDeEmpates++
        break;
        case 2:
		ContadorDePerdidas++
		break;
        case 3:
		ContadorDeGanadas++
		break;
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina){
        case 1:
        ContadorDeGanadas++
        break;
        case 2:
        ContadorDeEmpates++
        break;
        case 3:
        ContadorDePerdidas++
        break;   
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina){
        case 1:
        ContadorDePerdidas++
        break;
        case 2:
        ContadorDeGanadas++
        break;
        case 3:
        ContadorDeEmpates++
        break;
	}
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("empatadas").value = "Empato " + ContadorDeEmpates + " juegos";
	document.getElementById("ganadas").value = "Gano " + ContadorDeGanadas + " juegos"
	document.getElementById("perdidas").value = "Perdio " + ContadorDePerdidas + " juegos"
	
}