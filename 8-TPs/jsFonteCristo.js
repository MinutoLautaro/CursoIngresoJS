/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
function ComenzarIngreso () 
{
 	numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    while(isNaN(numero) || numero <= 0){
    numero = prompt("ingrese un numero");
    numero = parseInt(numero);
    }
}
function NumerosPares() {
    ComenzarIngreso();
    var contador = numero + 1;
    var contadorPares = 0
    while(contador > 1){
        contador--;
        

        if(contador % 2 == 0 ) {
            contadorPares++
            console.log(contador);
        }
    }
}
function NumerosImpares(){
    ComenzarIngreso();
}
function NumerosDivisibles(){
    ComenzarIngreso();
    var contadorDeDivisibles = 0;
    var contador = 1;

    while(contador < 101) {
        contador++

        if(numero % contador == 0){
            contadorDeDivisibles++

        }
    }
    alert("cantidad de divisibles " + contadorDeDivisibles);
}
function VerificarPrimo(){
    ComenzarIngreso();
    var contadorDeDivisibles = 0
    var contador = 1

    while(contador <= numero) {

        if(numero % contador == 0){
            contadorDeDivisibles++
        }
        contador++
    }
    if(contadorDeDivisibles == 2){
        alert("el numero es primo");
        }
    else {
        alert("el numero no es primo");
    }
}
function NumerosPrimos(){
    ComenzarIngreso();
    var contador = 1;
    var contadorPrimos = 2;
    var noEsPrimo = false;
    while (contador <= numero){
        console.log(contador);

        while(contadorPrimos < contador){
            if(contador % contadorPrimos == 0){
                noEsPrimo = true;
                break;
            }
            contadorPrimos++
        }
        contador++
    }
}