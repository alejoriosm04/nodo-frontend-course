function buscarSecuencias(listaNumeros, valorObjetivo) {
    const secuencias = [];

    for (let inicio = 0; inicio < listaNumeros.length; inicio++) {
        let suma = 0;
        let secuencia = [];

        for (let fin = inicio; fin < listaNumeros.length; fin++) {
            suma += listaNumeros[fin];
            secuencia.push(listaNumeros[fin]);

            if (suma === valorObjetivo) {
                secuencias.push(secuencia.slice()); 
                break;
            } else if (suma > valorObjetivo) {
                break; 
            }
        }
    }

    return secuencias;
}

console.log(buscarSecuencias([1, 2, 3, 4, 5], 9)); // Resultado: [[2, 3, 4], [4, 5]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 1)); // Resultado: [[1]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 15)); // Resultado: [[1, 2, 3, 4, 5]]
