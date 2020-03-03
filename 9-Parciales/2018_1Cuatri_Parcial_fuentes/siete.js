function mostrar()
{
  var numero;
  var sexo; 
  var acumuladorNotas;
  var contador = 0;
  var notaMinima;
  var sexoMinima;
  var contadorVarones;

        while(contador < 5){
        contador++
        
        do{
                numero = prompt("ingrese una nota");
                numero = parseInt(numero);
        }while(isNaN(numero) || numero < 0 || numero > 10 );

        do{
                sexo = prompt("ingrese sexo");
        }while (sexo != "f" && sexo != "m");
        
        acumuladorNotas += numero
        //b
        if(contador == 1){
                notaMinima = numero;
                sexoMinima = sexo;
        }
        else if(numero < notaMinima){
                notaMinima = numero;
                sexoMinima = sexo
        }
        if(sexo == "m" && numer0 >= 6){
                contadorVarones++
        }
}
        promedio = acumuladorNotas / contador;
        alert("el promedio de las notas es " + promedio);
        }