const vocalesTildadas = ["á", "é", "í", "ó", "ú"];

function detectorIdioma(texto) {
    for (let letra of texto) {
        if (vocalesTildadas.includes(letra)) {
            return true;
        }
    }
    return false;
}

let texto = prompt("Ingrese el texto: ");
console.log(detectorIdioma(texto) ? "Es español" : "Es ingles");