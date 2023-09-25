function comprimirCadena(cadena) {
    if (cadena.length === 0) {
        return "";
    }

    let resultado = "";
    let letraActual = cadena[0];
    let contador = 1;

    for (let i = 1; i < cadena.length; i++) {
        if (cadena[i] === letraActual) {
            contador++;
        } else {
            resultado += letraActual + (contador > 1 ? contador : "");
            letraActual = cadena[i];
            contador = 1;
        }
    }

    resultado += letraActual + (contador > 1 ? contador : "");

    return resultado;
}

console.log(comprimirCadena("aaabcc"));
console.log(comprimirCadena("abcd"))
