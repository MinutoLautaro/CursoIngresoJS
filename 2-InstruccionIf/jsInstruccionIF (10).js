function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
    
	numero = Math.round(Math.random()*10);
	
	if(numero > 8)
	{
		console.log("Exelente " + numero);
	}

	else if(numero < 4)
	{
		console.log("Vamos si se puede " + numero);
	}
	
	else
	{
		console.log("aprobo " + numero);
	}
}//FIN DE LA FUNCIÓN