function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
//Muy buen recurso el confirm g
	while(confirm("¿Desea ingresar un numero?")){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
	while(isNaN(numero)){
		numero = prompt("ingrese un numero valido");
		numero = parseInt(numero);
	}
		if(numero >= 0){
			positivo = parseInt(positivo);
			positivo = positivo + numero;
			// es preferible positivo += numero!!!
		}
		else{
			negativo = parseInt(negativo);
			negativo = numero * negativo;
			// mismo que *=
		}
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN