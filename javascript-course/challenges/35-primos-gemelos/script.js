function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function encontrarParesPrimosGemelos(rangoMaximo) {
    if (rangoMaximo < 4) {
        console.log("No hay pares de números primos gemelos en este rango.");
        return;
    }

    for (let numero = 2; numero <= rangoMaximo - 2; numero++) {
        if (esPrimo(numero) && esPrimo(numero + 2)) {
            console.log(`(${numero}, ${numero + 2})`);
        }
    }
}

const rangoMaximo = prompt("Ingrese el rango máximo para buscar pares de números primos gemelos:");
console.log(`Pares de números primos gemelos en el rango hasta ${rangoMaximo}:`);
encontrarParesPrimosGemelos(rangoMaximo);
