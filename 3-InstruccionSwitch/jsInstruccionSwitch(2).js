function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
     case"Julio":
     case"Agosto":
        alert("abrigate");
        break;
     case"Octubre":
     case"Septiembre":
     case"Noviembre":
     case"Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!.");
        break;
      default:
         alert("Falta para el invierno.")
    }
}//FIN DE LA FUNCIÓN