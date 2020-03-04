
function mostrar()
{
    var edad;
    var pasaje;
    var sexo;
    var nombre;
    var edadJoven = 100;
 alert("hola");
  while(confirm("¿Desea ingresar datos?")){
    do{
       
        edad = prompt("Ingrese su edad");
       
        edad = parseInt(edad); 
    }while(edad < 18);


     do{
       
         sexo = prompt("ingrese sexo");

        }while (sexo != "f" && sexo != "m");
     do{
         
         pasaje = prompt("ingrese tipo de pasaje");

     }while(pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional");
     
      nombre = prompt("Ingrese su nombre");

      if(edad < edadJoven && sexo == "m" && pasaje == "nacional"){
          edadJoven = edad
         alert(nombre + " con " + edadJoven + " años es el hombre mas joven con el pasaje tipo " + pasaje );
      }
  }
    
}
