let semilla = 10;

function generarNumeroPseudoaleatorio() {
    semilla = (semilla * 1664525 + 1013904223) % 4294967296;
    const numeroAleatorio = (semilla / 4294967296) * 100;
    return Math.floor(numeroAleatorio);
}

const numeroAleatorio = generarNumeroPseudoaleatorio();
console.log(`Número pseudoaleatorio: ${numeroAleatorio}`);
