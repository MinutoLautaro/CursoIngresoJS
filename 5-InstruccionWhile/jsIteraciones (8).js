function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(confirm("¿Desea ingresar un numero?")){
		numero = prompt("Ingrese un numero");
		if(numero > 0){
			positivo = positivo + numero;
		}
		else{
			negativo = (numero * negativo) * negativo;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN