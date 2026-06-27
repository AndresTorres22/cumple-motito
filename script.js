// Fecha en la que comenzaron la relación
const inicio = new Date("2025-09-11T00:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    document.getElementById("contador").innerHTML =
    `${dias} días <br>
     ${horas} horas <br>
     ${minutos} minutos <br>
     ${segundos} segundos`;

}

actualizarContador();

setInterval(actualizarContador, 1000);

// ---------- VISOR DE FOTOS ----------

const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");

document.querySelectorAll(".fotos img").forEach(imagen => {

    imagen.addEventListener("click", () => {

        visor.style.display = "flex";
        imagenGrande.src = imagen.src;

    });

});

cerrar.addEventListener("click", () => {

    visor.style.display = "none";

});

visor.addEventListener("click", (e) => {

    if (e.target === visor) {

        visor.style.display = "none";

    }

});