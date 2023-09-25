function cuentaAtras(numeroInicial, segundosEntreCuenta) {
    if (numeroInicial <= 0 || segundosEntreCuenta <= 0) {
        console.log("Ambos parámetros deben ser números enteros positivos.");
        return;
    }

    let contador = numeroInicial;

    function imprimirNumero() {
        if (contador === 0) {
            console.log("¡Cuenta atrás finalizada!");
        } else {
            console.log(contador);
            contador--;
            setTimeout(imprimirNumero, segundosEntreCuenta * 1000);
        }
    }

    imprimirNumero();
}


const numeroInicial = 10; 
const segundosEntreCuenta = 5; 
console.log(`Cuenta atrás desde ${numeroInicial} con ${segundosEntreCuenta} segundos entre cada cuenta:`);
cuentaAtras(numeroInicial, segundosEntreCuenta);
