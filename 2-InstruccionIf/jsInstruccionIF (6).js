function mostrar()
{
//tomo la edad  
    var edad;
    var condicionUno;
    var condicionDos;
    var adolescente;
    var menor;
    var mayor;

    edad = document.getElementById("edad").value;
    condicionUno = edad >= 13;
    condicionDos = edad <= 17;
    menor = edad < 13;
    mayor = edad > 17;
    adolescente = condicionUno && condicionDos;

    if(adolescente)
    
    alert("Usted es adolescente")
    
    else if(menor)
    {
        alert("Usted es un niño");
    }
    else
    {
    alert("Usted es mayor de edad");
    }
    



}//FIN DE LA FUNCIÓN