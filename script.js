const edadSelect = document.getElementById("edad");
const resultado = document.getElementById("resultado");

edadSelect.addEventListener("change", function () {

    const edad = parseInt(this.value);

    if (!edad) {
        resultado.innerHTML = "";
        return;
    }

    let grupo = "";
    let descripcion = "";

    if (edad >= 3 && edad <= 5) {

        grupo = "Burbujitas";

        descripcion =
            "Grupo para niños y niñas de 3 a 5 años. Trabajamos adaptación al medio acuático, confianza, flotación y primeros desplazamientos.";

    } else if (edad >= 6 && edad <= 8) {

        grupo = "Exploradores";

        descripcion =
            "Grupo para niños y niñas de 6 a 8 años. Trabajamos coordinación, respiración, desplazamientos y bases técnicas de natación.";

    } else if (edad >= 9 && edad <= 13) {

        grupo = "Navegantes";

        descripcion =
            "Grupo para niños y niñas de 9 a 13 años. Trabajamos perfeccionamiento técnico, resistencia, coordinación y autonomía en el agua.";

    }

    resultado.innerHTML = `
        <div class="resultado-grupo">

            <p>El grupo correspondiente es:</p>

            <h3>${grupo}</h3>

            <p>${descripcion}</p>

        </div>
    `;

});
const formInscripcion = document.getElementById("formInscripcion");

formInscripcion.addEventListener("submit", function (event) {

    event.preventDefault();

    const apoderado = document.getElementById("apoderado").value;
    const alumno = document.getElementById("alumno").value;
    const edad = parseInt(document.getElementById("edadAlumno").value);
    const plan = document.getElementById("plan").value;
    const horario = document.getElementById("horario").value;

    let grupo = "";

    if (edad >= 3 && edad <= 5) {
        grupo = "Burbujitas";
    } else if (edad >= 6 && edad <= 8) {
        grupo = "Exploradores";
    } else if (edad >= 9 && edad <= 13) {
        grupo = "Navegantes";
    }

    const mensaje = `
Hola Fusión Tri Kids 👋

Quiero solicitar una inscripción.

Apoderado/a: ${apoderado}
Alumno/a: ${alumno}
Edad: ${edad} años
Grupo: ${grupo}
Plan: ${plan}
Horario: ${horario}
`;

   const numeroWhatsApp = "56950621684";

const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

window.open(url, "_blank");

});
function inscribirWhatsApp() {

    const apoderado = document.getElementById("apoderado").value;
    const alumno = document.getElementById("alumno").value;
    const edad = parseInt(document.getElementById("edadAlumno").value);
    const plan = document.getElementById("plan").value;
    const horario = document.getElementById("horario").value;

    if (!apoderado || !alumno || !edad || !plan || !horario) {
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

    window.location.href = url;
}