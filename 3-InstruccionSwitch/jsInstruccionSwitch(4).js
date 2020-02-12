function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
        case"Enero":
        case"Marzo":
        case"Mayo":
        case"Julio":
        case"Agosto":
        case"Octubre":
        case"Diciembre":
            alert("Tiene hasta 31 dias");
            break;
        case"Febrero":
            alert("Tiene mas de 28 dias");
            break;
        default:
            alert("Tiene hasta 30 dias");
    }



}//FIN DE LA FUNCIÓN