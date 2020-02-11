function mostrar()
{
//tomo la edad  

	var edad;
    var estadoCivil;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").onselect
    estadoCivil = charseInt(estadoCivil);
    if (edad < 18 && estadoCivil != "Soltero"){

        alert(estadoCivil);
    }


}//FIN DE LA FUNCIÓN