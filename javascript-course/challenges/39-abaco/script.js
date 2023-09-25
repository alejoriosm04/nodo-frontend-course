function leerAbaco(abaco) {
    const valoresCuentas = [1000000, 100000, 10000, 1000, 100, 10, 1];

    let resultado = 0;

    for (let i = 0; i < abaco.length; i++) {
        const elemento = abaco[i];

        const cuentas = elemento.split('---')[0].length;

        resultado += cuentas * valoresCuentas[i];
    }

    return resultado;
}

const abaco = [
    "O---OOOOOOOO",
    "OOO---OOOOOO",
    "---OOOOOOOOO",
    "OO---OOOOOOO",
    "OOOOOOO---OO",
    "OOOOOOOOO---",
    "---OOOOOOOOO"
];

const numero = leerAbaco(abaco);
console.log("Número leído del ábaco:", numero); // Resultado: 1302790
