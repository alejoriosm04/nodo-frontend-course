function cruzarMatrices(matrizA, matrizB) {
    const filas = matrizA.length;
    const columnas = matrizA[0].length;

    const matrizResultante = [];

    for (let i = 0; i < filas; i++) {
        const filaResultante = [];
        for (let j = 0; j < columnas; j++) {
            const valorA = matrizA[i][j];
            const valorB = matrizB[i][j];
            if (esNumeroImpar(valorA) && esNumeroPar(valorB)) {
                filaResultante.push('X');
            } else if (esNumeroImpar(valorA) || esNumeroImpar(valorB)) {
                filaResultante.push('-');
            } else {
                filaResultante.push('O');
            }
        }
        matrizResultante.push(filaResultante);
    }

    return matrizResultante;
}

function esNumeroImpar(numero) {
    return numero % 2 !== 0;
}

function esNumeroPar(numero) {
    return numero % 2 === 0;
}


let A = [[1, 2], [3, 4]];
let B = [[2, 3], [4, 5]];
console.log(cruzarMatrices(A, B));
