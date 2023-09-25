function analisisMensaje(texto) {
    let numCaracteres = texto.trim().length;
    let numPalabras = texto.split(" ").length;
    let numOraciones = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "?" || texto[i] === "!" || texto[i] === ".") {
            numOraciones++;
        }
    }

    let answers = [numCaracteres, numPalabras, numOraciones];

    return answers;
}

let texto = prompt("Ingrese el texto: ");
let answers = analisisMensaje(texto);
console.log("Número de caracteres: " + answers[0]);
console.log("Número de palabras: " + answers[1]);
console.log("Número de oraciones: " + answers[2]);