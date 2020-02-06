function mostrar()
{
//tomo la edad  
    var edad;
    var condicionUno;
    var condicionDos;
    var adolescente;

    edad = document.getElementById("edad").value;
    condicionUno = edad >= 13;
    condicionDos = edad <= 17;
    adolescente = condicionUno && condicionDos

    if(adolescente)
    {

    }
    else
    {
        alert("Usted NO es un adolescente");
    }
}//FIN DE LA FUNCIÓN