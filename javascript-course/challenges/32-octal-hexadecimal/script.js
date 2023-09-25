function decimalAOctalHexadecimal(numeroDecimal) {
    if (isNaN(numeroDecimal)) {
        return "No es un número válido.";
    }

    const esNegativo = numeroDecimal < 0;
    if (esNegativo) {
        numeroDecimal = Math.abs(numeroDecimal); 
    }

    let octal = "";
    let numeroEntero = Math.floor(numeroDecimal);
    let numeroFraccional = numeroDecimal - numeroEntero;
    
    while (numeroEntero > 0) {
        const residuo = numeroEntero % 8;
        octal = residuo + octal;
        numeroEntero = Math.floor(numeroEntero / 8);
    }
    
    if (octal === "") {
        octal = "0";
    }

    let hexadecimal = "";
    while (numeroFraccional !== 0) {
        const producto = numeroFraccional * 16;
        const entero = Math.floor(producto);
        hexadecimal += entero.toString(16);
        numeroFraccional = producto - entero;
    }

    if (hexadecimal === "") {
        hexadecimal = "0";
    }

    if (esNegativo) {
        return `- Octal: -${octal}, Hexadecimal: -${hexadecimal}`;
    } else {
        return `Octal: ${octal}, Hexadecimal: ${hexadecimal}`;
    }
}

const numeroDecimal = 123.456;
const conversion = decimalAOctalHexadecimal(numeroDecimal);
console.log(conversion); 
