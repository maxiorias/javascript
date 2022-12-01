let tipo_vehiculo = 0;
let tipo_lavado = 0;
let precio_final = 0;


/*---------------- Funciones ----------------*/

function calcularPrecio(tipo_vehiculo, tipo_lavado) {
    let precio_interior_auto = 600;
    let precio_interior_camioneta = 1000;
    let precio_exterior_auto = 1100;
    let precio_exterior_camioneta = 1600;

    if (tipo_vehiculo == 1) {
        switch (tipo_lavado) {
            case 1:
                precio_final = precio_interior_auto;
                break;
            case 2:
                precio_final = precio_exterior_auto;
                break;
            case 3:
                precio_final = precio_interior_auto + precio_exterior_auto;
                break;
            default:
                console.log("No tomó ningún valor del switch");
        }
    } else {
        switch (tipo_lavado) {
            case 1:
                precio_final = precio_interior_camioneta;
                break;
            case 2:
                precio_final = precio_exterior_camioneta;
                break;
            case 3:
                precio_final = precio_interior_camioneta + precio_exterior_camioneta;
                break;
            default:
                console.log("No tomó ningún valor del switch");
        }
    }
}

function agregar_extras(precio_final) {
    let opcion_servicio_extra = 0;
    let precio_servicio_extra = 500;

    while (opcion_servicio_extra != 1 || opcion_servicio_extra != 2 || opcion_servicio_extra != 3) {
        opcion_servicio_extra = parseInt(prompt("Por un monto de $" + precio_servicio_extra + " puede agregar uno de los siguientes servicios: \n \n 1) Pulido de ópticas \n \n 2) Lavado de motor \n \n 3) No me interesa agregar un extra"));
        if (opcion_servicio_extra == 1 || opcion_servicio_extra == 2) {
            precio_final += precio_servicio_extra;
            alert("El precio total del lavado es: $" + precio_final);
            break;
        } else if (opcion_servicio_extra == 3) {
            alert("El precio total del lavado es: $" + precio_final);
            break;
        } else {
            alert("El valor ingresado es incorrecto. Por favor seleccione la opción 1, 2 o 3.");
        }
    }
}

/*---------------- 1° Prompt ----------------*/

while (tipo_vehiculo != 1 || tipo_vehiculo != 2) {
    tipo_vehiculo = parseInt(prompt(" LaveCar tu lavadero   \n \n Bienvenid@ a LaveCar!\n \n Ingrese el número según la opción requerida:\n \n • Tipo de vehículo:\n \n 1 - Automóvil \n \n 2 - Camioneta"));
    if (tipo_vehiculo == 1) {
        console.log("El vehículo es un auto");
        break
    }
    if (tipo_vehiculo == 2) {
        console.log("El vehículo es un camioneta");
        break
    }
    alert("El valor ingresado es incorrecto. Por favor seleccione la opción 1 o 2.");
}


/*---------------- 2° Prompt ----------------*/


while (tipo_lavado != 1 || tipo_lavado != 2 || tipo_lavado != 3) {
    tipo_lavado = parseInt(prompt("• Ingrese el tipo de lavado:\n \n 1) Interior \n \n 2) Exterior \n \n 3) Interior y Exterior"));
    if (tipo_lavado == 1) {
        console.log("El lavado es interior");
        break
    }
    if (tipo_lavado == 2) {
        console.log("El lavado es exterior");
        break
    }
    if (tipo_lavado == 3) {
        console.log("El lavado es interior y exterior");
        break
    }
    alert("El valor ingresado es incorrecto. Por favor seleccione la opción 1, 2 o 3.");
}


/*---------------- Ejecución del script ----------------*/

calcularPrecio(tipo_vehiculo, tipo_lavado);
agregar_extras(precio_final);