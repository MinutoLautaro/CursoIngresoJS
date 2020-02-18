function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si'; 
	var numero;

	while(confirm("¿Desea ingresar un numero?")){
		contador++

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
	
	while(isNaN(numero)){
		numero = prompt("ingrese un numero valido");
	}
		acumulador += numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN