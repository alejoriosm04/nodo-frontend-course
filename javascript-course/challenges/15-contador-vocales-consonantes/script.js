const vocales = ["a", "e", "i", "o", "u"];
const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let numVocales = 0;
let numConsonantes = 0;

function contadorVocalesConsonantes(texto) {
    texto = texto.toLowerCase()
    for(let letra of texto) {
        if (vocales.includes(letra)) {
            numVocales++;
        } else if (consonantes.includes(letra)) {
            numConsonantes++;
        }
    }

    let num = [numVocales, numConsonantes]

    return num;
}

let texto = prompt("Ingrese el texto a contar: ");
console.log("Número de vocales y consonantes: " + contadorVocalesConsonantes(texto));