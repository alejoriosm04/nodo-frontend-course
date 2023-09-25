function esExpresionMatematicaCorrecta(expresion) {
    const tokens = expresion.split(' ');

    let esperandoNumero = true;

    for (const token of tokens) {
        if (esperandoNumero) {
            if (!esNumeroValido(token)) {
                return false;
            }
            esperandoNumero = false;
        } else {
            if (!esOperacionValida(token)) {
                return false;
            }
            esperandoNumero = true; 
        }
    }

    return esperandoNumero === true;
}

function esNumeroValido(token) {
    return /^[-+]?\d+(\.\d+)?$/.test(token);
}

function esOperacionValida(token) {
    return /^[+\-*/%]$/.test(token);
}

const expresion1 = "5 + 6 / 7 - 4";
console.log(`"${expresion1}" es una expresión matemática correcta: ${esExpresionMatematicaCorrecta(expresion1)}`);

const expresion2 = "5 a 6";
console.log(`"${expresion2}" es una expresión matemática correcta: ${esExpresionMatematicaCorrecta(expresion2)}`);
