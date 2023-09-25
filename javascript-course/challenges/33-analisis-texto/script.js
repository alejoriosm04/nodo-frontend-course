function analizarTexto(texto) {
    let numeroPalabras = 0;
    let longitudTotalPalabras = 0;
    let numeroOraciones = 0;
    let palabraMasLarga = "";

    let palabraActual = "";
    let enPalabra = false;
    let enOracion = false;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];

        if (/[a-zA-Z']/.test(caracter)) {
            palabraActual += caracter;
            enPalabra = true;
        } else {
            if (caracter === '.') {
                enOracion = true;
                numeroOraciones++;
            }

            if (enPalabra) {
                numeroPalabras++;
                longitudTotalPalabras += palabraActual.length;

                if (palabraActual.length > palabraMasLarga.length) {
                    palabraMasLarga = palabraActual;
                }

                palabraActual = "";
                enPalabra = false;
            }
        }
    }

    if (enPalabra) {
        numeroPalabras++;
        longitudTotalPalabras += palabraActual.length;

        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }

    const longitudPromedio = numeroPalabras > 0 ? longitudTotalPalabras / numeroPalabras : 0;

    return {
        numeroPalabras,
        longitudPromedio,
        numeroOraciones,
        palabraMasLarga
    };
}

const textoEjemplo = "Este es un ejemplo de texto. Contiene varias oraciones y palabras de diferentes longitudes.";
const resultado = analizarTexto(textoEjemplo);

console.log("Número total de palabras:", resultado.numeroPalabras);
console.log("Longitud promedio de las palabras:", resultado.longitudPromedio);
console.log("Número de oraciones:", resultado.numeroOraciones);
console.log("Palabra más larga:", resultado.palabraMasLarga);
