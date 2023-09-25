function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function esFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (a < numero) {
        let temp = a;
        a = b;
        b += temp;
    }

    return a === numero;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function comprobarNumero(numero) {
    let resultado = `${numero} es `;

    if (esPrimo(numero)) {
        resultado += "primo, ";
    } else {
        resultado += "no es primo, ";
    }

    if (esFibonacci(numero)) {
        resultado += "fibonacci, ";
    } else {
        resultado += "no es fibonacci, ";
    }

    if (esPar(numero)) {
        resultado += "y es par.";
    } else {
        resultado += "y es impar.";
    }

    return resultado;
}

const numero = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numero)) {
    const resultado = comprobarNumero(numero);
    console.log(resultado);
} else {
    console.log("Por favor, ingrese un número válido.");
}
