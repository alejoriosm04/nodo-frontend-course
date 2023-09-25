function fechaRomana(fecha) {
    const partes = fecha.split("-");
    const dia = convertirNumeroARomano(Number(partes[0]));
    const mes = convertirNumeroARomano(Number(partes[1]));
    const año = convertirNumeroARomano(Number(partes[2]));

    return `${dia}-${mes}-${año}`;
}

function convertirNumeroARomano(numero) {
    const valores = [
        1000, 900, 500, 400,
        100,  90,  50,  40,
        10,    9,   5,   4,
        1
    ];

    const romanos = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let resultado = "";

    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i]) {
            resultado += romanos[i];
            numero -= valores[i];
        }
    }

    return resultado;
}

console.log(fechaRomana("01-01-2021")); // Resultado: "I-I-MMXXI"
console.log(fechaRomana("15-05-1998")); // Resultado: "XV-V-MCMXCVIII"
