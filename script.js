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