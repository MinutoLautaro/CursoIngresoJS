/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var total;

    importe = document.getElementById("importe").value;
    total = document.getElementById("importe").value;

    resultado = parseInt(resultado);
    total = parseInt(total);

    resultado = (importe * 20) / 100
    total = total - resultado

    document.getElementById("resultado").value = total
}
