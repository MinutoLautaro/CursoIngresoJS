/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
function FahrenheitCentigrados () 
{
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    temperatura = (temperatura - 32) * (5 / 9);

    console.log(temperatura);
	
}

function CentigradosFahrenheit () 
{
    temperatura = document.getElementById("Temperatura").value;

    temperatura = parseInt(temperatura);
    temperatura = (temperatura * (9 / 5)) + 32 

    console.log(temperatura);

}
