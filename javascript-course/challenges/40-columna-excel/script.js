function columnaExcelANumero(nombreColumna) {
    let numero = 0;
    for (let i = 0; i < nombreColumna.length; i++) {
        const letra = nombreColumna.charAt(i);
        const valorLetra = letra.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        numero = numero * 26 + valorLetra;
    }
    return numero;
}

const nombreColumna1 = "A";
console.log(`El número de la columna ${nombreColumna1} es: ${columnaExcelANumero(nombreColumna1)}`); // Resultado: 1

const nombreColumna2 = "Z";
console.log(`El número de la columna ${nombreColumna2} es: ${columnaExcelANumero(nombreColumna2)}`); // Resultado: 26

const nombreColumna3 = "AA";
console.log(`El número de la columna ${nombreColumna3} es: ${columnaExcelANumero(nombreColumna3)}`); // Resultado: 27

const nombreColumna4 = "CA";
console.log(`El número de la columna ${nombreColumna4} es: ${columnaExcelANumero(nombreColumna4)}`); // Resultado: 79
