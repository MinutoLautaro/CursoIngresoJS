function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
    
	numero = Math.round(Math.random()*10);
	
	if(numero > 8)
	{
		alert("Exelente " + numero);
	}

	else if(numero < 4)
	{
		alert("Vamos si se puede " + numero);
	}
	
	else
	{
		alert("aprobo " + numero);
	}
}//FIN DE LA FUNCIÓN