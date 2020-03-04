function mostrar() {
    var edad;
    var edadJoven = 0;
    var edadVieja = 0;
    var edadMujeres = 0;
    var pasaje;
    var pasajeViejo;
    var sexo;
    var sexoViejo;
    var nombre;
    var nombreJoven;
    var contador = 0;
    var contadorMujeres = 0;
    var contadorMujeresUN = 0;
    var promedioMujeres = 0;
    while (confirm("¿Desea ingresar datos?")) {
        do {
            edad = prompt("Ingrese su edad");
            edad = parseInt(edad);

        } while (isNaN(edad) || edad < 18);
        contador++
        do {
            sexo = prompt("ingrese sexo");

        } while (sexo != "f" && sexo != "m");
        do {
            pasaje = prompt("ingrese tipo de pasaje");

        } while (pasaje != "urbano" && pasaje != "nacional" && pasaje != "internacional");

        do {
            nombre = prompt("Ingrese su nombre");
        } while (nombre == null || nombre == "");

        //Fin toma de datos
        if (contador == 1 && sexo == "m" && pasaje == "nacional") {
            edadJoven = edad;
            nombreJoven = nombre;
        }
        if (contador != 1 && edad < edadJoven && sexo == "m" && pasaje == "nacional") {
            edadJoven = edad;
            nombreJoven = nombre;
        }
        if (contador == 1) {
            sexoViejo = sexo;
            edadVieja = edad;
            pasajeViejo = pasaje;
        }
        if (contador != 1 && edad > edadVieja) {
            sexoViejo = sexo;
            edadVieja = edad;
            pasajeViejo = pasaje;
        }
        if (sexo == "f" && pasaje == ("nacional" || pasaje == "urbano")) {
            contadorMujeresUN++
        }
        if (sexo == "f") {
            contadorMujeres++
            edadMujeres = edadMujeres + edad;
        }
        //Fin Calculos
    }
    //promiedos
    promedioMujeres = edadMujeres / contadorMujeres

    //Verificacion con alert
    if (edadJoven != 0) {
        alert(nombreJoven + " es el hombre mas joven con pasaje nacional");
    } else {
        alert("no hay ningun hombre joven con pasaje nacional")
    }
    if (edadVieja != 0) {
        alert("El pasajero mas viejo es " + sexoViejo + " y su pasaje es " + pasajeViejo);
    } else {
        alert("no se han registrado pasajeros");
    }
    alert("Cant. mujeres con pasajes nacional o urbano" + contadorMujeresUN);
    if (edadMujeres != 0) {
        alert("el promedio de edad de las pasajeras mujeres es " + promedioMujeres);
    } else {
        alert("No hay mujeres donde sacar promedio");
    }
}

// la etiqueta "<br>" da salto de linea en document.write