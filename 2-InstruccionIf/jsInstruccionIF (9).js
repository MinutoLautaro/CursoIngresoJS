function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero
    
	numero = Math.round(Math.random()*(50-10)) + 10;
/* se resta el maximo por el minimo numero que se quiere, luego se suma el minimo
	para generar random distinto a 0
	*/

	console.log(numero);

}//FIN DE LA FUNCIÓN

/*	var numero
    
	numero = Math.round(Math.random()*10);

	alert(numero);
	*/