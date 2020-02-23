function mostrar()
{

	var contador = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var contadorNumeros;
	var diferencia;
	var promedioNegativos;
	var promedioPositivos;
	//declarar contadores y variables 
	var numero;
	var positivos = 0;
	var negativos = 0;
	var respuesta="si";
	
	contadorNegativos = parseInt(contadorNegativos);
	contadorNumeros = parseInt(contadorNumeros);
	

	while(confirm("desea ingresar un numero")){
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);	
		if(numero == 0){
			contadorCeros++;
			contadorNumeros++;
		}
			else if(numero >= 1){
			contadorPositivos++;
			contadorNumeros++;
			positivos = parseInt(positivos);
			positivos = numero + positivos;
				}
		if(numero < 0){
			contadorNegativos++;
			contadorNumeros++;
			negativos = parseInt(negativos);
			negativos = numero + negativos;
		}
		if(numero % 2 == 0){
			contadorPares++
		}
		
		promedioNegativos = contadorNumeros / contadorNegativos;
	}
	document.write("suma de positivos es " + positivos);
	document.write(" cantidad de numeros positivos ingresados es " + contadorPositivos);
	document.write(" cantidad de ceros ingresados es " + contadorCeros);
	document.write(" la cantidad de negativos es " + contadorNegativos);
	document.write(" la suma de negativos es " + negativos);
	document.write(" la cantidad de pares es " + contadorPares);
	document.write(" el promedio de negativos es " + promedioNegativos)


}//FIN DE LA FUNCIÓN