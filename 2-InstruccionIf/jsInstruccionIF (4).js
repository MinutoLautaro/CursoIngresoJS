function mostrar()
{
//tomo la edad  
    var edad 
    var condicionUno
    var condicionDos
    var adolescente

    edad = document.getElementById("edad").value;
    condicionUno = edad >= 13
    condicionDos = edad <= 17
    adolescente = condicionUno && condicionDos

    if(adolescente)
    {
        alert("Usted es un adolescente")
    }






}//FIN DE LA FUNCIÓN