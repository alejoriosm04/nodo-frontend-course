function dibujarEspiral(lado) {
    if (lado < 1) {
        console.log("El tamaño del lado debe ser un número positivo.");
        return;
    }

    const matriz = new Array(lado).fill().map(() => new Array(lado).fill(" "));

    let inicioFila = 0;
    let finFila = lado - 1;
    let inicioColumna = 0;
    let finColumna = lado - 1;
    let contador = 1;

    while (inicioFila <= finFila && inicioColumna <= finColumna) {
        for (let i = inicioColumna; i <= finColumna; i++) {
            matriz[inicioFila][i] = "═";
        }
        inicioFila++;

        for (let i = inicioFila; i <= finFila; i++) {
            matriz[i][finColumna] = "║";
        }
        finColumna--;

        if (inicioFila <= finFila) {
            for (let i = finColumna; i >= inicioColumna; i--) {
                matriz[finFila][i] = "═";
            }
            finFila--;
        }

        if (inicioColumna <= finColumna) {
            for (let i = finFila; i >= inicioFila; i--) {
                matriz[i][inicioColumna] = "║";
            }
            inicioColumna++;
        }
    }

    // Imprimir la espiral
    for (let i = 0; i < lado; i++) {
        console.log(matriz[i].join(""));
    }
}


const lado = 6;
console.log(`Espiral de lado ${lado}:`);
dibujarEspiral(lado);
