function mostrar()
{

	var contador = 0;
	var acumulador = 0;

	while(contador < 5){
		contador++;
		
		var numero  =  prompt("ingrese un numero");
		
		numero = parseInt(numero);

	while (isNaN(numero)){
		numero = prompt("Ingrese un numero valido");
		// valida que el valor ingresado sea un NUMBER
		numero = parseInt(numero);
	}
		acumulador += numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador / contador;

}//FIN DE LA FUNCIÓN