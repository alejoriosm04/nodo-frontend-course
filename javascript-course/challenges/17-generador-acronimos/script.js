function generadorAcronimos(texto) {
    let acronimo = "";
    texto = texto.trim();
    if (/[A-Z]/.test(texto[0])) {
        acronimo += texto[0];
    }

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            console.log(texto[i]);
            if (/[A-Z]/.test(texto[i+1])) {
                acronimo += texto[i+1];
            }
        }
    }

    return acronimo;
}

let texto = prompt("Ingrese el texto: ");
console.log(generadorAcronimos(texto));