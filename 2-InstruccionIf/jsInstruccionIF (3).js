function mostrar()
{
//tomo la edad  
    var edad;
    var condicion;
    

    edad = document.getElementById("edad").value;
    condicion = edad >= 18;


    if(condicion)
    {
        alert("Usted es mayor de edad");
    }
    else 
    {
        alert("Usted es menor de edad");
    }
}//FIN DE LA FUNCIÓN