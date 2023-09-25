document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcularBtn");
    const resultado = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function () {
        const valentia = document.querySelector('input[name="valentia"]:checked');
        const ambicion = document.querySelector('input[name="ambicion"]:checked');
        const estudio = document.querySelector('input[name="estudio"]:checked');
        const lealtad = document.querySelector('input[name="lealtad"]:checked');
        const creatividad = document.querySelector('input[name="creatividad"]:checked');

        if (!valentia || !ambicion || !estudio || !lealtad || !creatividad) {
            resultado.textContent = "Por favor, responde todas las preguntas.";
        } else {
            // Lógica para determinar la casa
            let casa;
            if (valentia.value === "Sí" && lealtad.value === "Sí") {
                casa = "Gryffindor";
            } else if (ambicion.value === "Sí") {
                casa = "Slytherin";
            } else if (estudio.value === "Sí") {
                casa = "Ravenclaw";
            } else if (lealtad.value === "Sí") {
                casa = "Hufflepuff";
            } else if (creatividad.value === "Sí") {
                casa = "Ravenclaw";
            } else {
                casa = "No podemos determinar tu casa. ¡Eres un mago misterioso!";
            }

            resultado.textContent = `¡Tu casa en Hogwarts es: ${casa}!`;
        }
    });
});
