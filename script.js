function actualizarGrupoYHorarios() {

    const edad = parseInt(
        document.getElementById("edadAlumno").value
    );

    const grupoAutomatico =
        document.getElementById("grupoAutomatico");

    const horario =
        document.getElementById("horario");

    let grupo = "";
    let opciones = [];


    if (edad >= 3 && edad <= 5) {

        grupo = "Burbujitas";

        opciones = [
            "Lunes, Miércoles y Viernes 17:00 a 18:00 hrs",
            "Lunes, Miércoles y Viernes 18:00 a 19:00 hrs",
            "Sábado 14:30 a 15:30 hrs"
        ];

    } else if (edad >= 6 && edad <= 8) {

        grupo = "Exploradores";

        opciones = [
            "Lunes, Miércoles y Viernes 17:00 a 18:00 hrs",
            "Lunes, Miércoles y Viernes 18:00 a 19:00 hrs",
            "Lunes y Miércoles 19:00 a 20:00 hrs",
            "Sábado 14:30 a 15:30 hrs"
        ];

    } else if (edad >= 9 && edad <= 13) {

        grupo = "Navegantes";

        opciones = [
            "Lunes y Miércoles 19:00 a 20:00 hrs",
            "Sábado 14:30 a 15:30 hrs"
        ];

    } else {

        grupoAutomatico.innerHTML = "";

        horario.innerHTML =
            '<option value="">Ingresa una edad entre 3 y 13 años</option>';

        return;
    }


    grupoAutomatico.innerHTML =
        '<div class="grupo-detectado">' +
        'Grupo correspondiente: <strong>' +
        grupo +
        '</strong></div>';


    horario.innerHTML =
        '<option value="">Seleccionar horario</option>';


    opciones.forEach(function(opcion) {

        const option = document.createElement("option");

        option.value = opcion;
        option.textContent = opcion;

        horario.appendChild(option);

    });

}



function inscribirWhatsApp() {

    const apoderado =
        document.getElementById("apoderado").value.trim();

    const alumno =
        document.getElementById("alumno").value.trim();

    const edad =
        parseInt(
            document.getElementById("edadAlumno").value
        );

    const plan =
        document.getElementById("plan").value;

    const horario =
        document.getElementById("horario").value;


    if (
        !apoderado ||
        !alumno ||
        !edad ||
        !plan ||
        !horario
    ) {

        alert("Por favor completa todos los datos.");

        return;
    }


    let grupo = "";


    if (edad >= 3 && edad <= 5) {

        grupo = "Burbujitas";

    } else if (edad >= 6 && edad <= 8) {

        grupo = "Exploradores";

    } else if (edad >= 9 && edad <= 13) {

        grupo = "Navegantes";

    } else {

        alert("La edad debe estar entre 3 y 13 años.");

        return;
    }


    const mensaje =
        "Hola Fusión Tri Kids 👋\n\n" +
        "Quiero solicitar una inscripción.\n\n" +
        "Apoderado/a: " + apoderado + "\n" +
        "Alumno/a: " + alumno + "\n" +
        "Edad: " + edad + " años\n" +
        "Grupo: " + grupo + "\n" +
        "Plan: " + plan + "\n" +
        "Horario: " + horario;


    const numeroWhatsApp = "56950621684";


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensaje);


    window.open(url, "_blank");
}

function copiarDatosTransferencia() {

    const datos =
        "Fusión Tri Kids\n\n" +
        "Titular: María Soledad Ibáñez Villagrán\n" +
        "RUT: 19.763.738-2\n" +
        "Entidad: Mercado Pago\n" +
        "Tipo de cuenta: Cuenta Vista\n" +
        "Número de cuenta: 1037753644";

    navigator.clipboard.writeText(datos)
        .then(function() {

            alert("Datos de transferencia copiados.");

        })
        .catch(function() {

            alert("No se pudieron copiar los datos.");

        });

}
