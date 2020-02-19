function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo
	var primeraVez;
	var respuesta='si';



	/*while(respuesta!='no')
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("ingrese un numero valido");
			numero = parseInt(numero)
		}*/
do{
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
}while(isNaN(numero));
		if(primeraVez){
			primeraVez = false;

			maximo = numero
			minimo = numero
		}
		else {
			if(numero > maximo){
				maximo = numero
		}
			if(numero < minimo){
				minimo = numero
			}
		
		respuesta = confirm("¿desea continuar?");
	
	}

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
}
//FIN DE LA FUNCIÓN