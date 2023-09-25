function dibujarTrifuerza(n) {
    if (n <= 0) {
        console.log("El número de filas debe ser un entero positivo.");
        return;
    }

    const filaMayor = 2 * n - 1;

    for (let i = 1; i <= filaMayor; i++) {
        let fila = "";

        if (i <= n) {
            for (let j = 1; j <= filaMayor; j++) {
                if (j <= n - i || j > n + i) {
                    fila += " ";
                } else {
                    fila += "*";
                }
            }
        } else {
            const filaInvertida = filaMayor - i + 1;
            for (let j = 1; j <= filaMayor; j++) {
                if (j <= filaInvertida || j > filaMayor - filaInvertida) {
                    fila += " ";
                } else {
                    fila += "*";
                }
            }
        }

        console.log(fila);
    }
}


const numeroFilas = 5;
dibujarTrifuerza(numeroFilas);
