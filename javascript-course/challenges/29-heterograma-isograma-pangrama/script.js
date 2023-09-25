function esHeterograma(cadena) {
    cadena = cadena.toLowerCase();
    const letrasVistas = {};
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (/[a-z]/.test(caracter)) {
            if (letrasVistas[caracter]) {
                return false;
            } else {
                letrasVistas[caracter] = true;
            }
        }
    }
    return true;
}

function esIsograma(cadena) {
    cadena = cadena.toLowerCase();
    const letrasVistas = {};
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (/[a-z]/.test(caracter)) {
            if (letrasVistas[caracter]) {
                return false;
            } else {
                letrasVistas[caracter] = true;
            }
        }
    }
    return true;
}

function esPangrama(cadena) {
    cadena = cadena.toLowerCase();
    const letrasVistas = new Set();
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (/[a-z]/.test(caracter)) {
            letrasVistas.add(caracter);
        }
    }
    return letrasVistas.size === 26;
}

const texto1 = "Álvaro, compra whisky, jazmín o bien té azúl"; // Ejemplo de heterograma
console.log(`Heterograma: ${esHeterograma(texto1)}`); // Devuelve true

const texto2 = "Dermatoglyphics"; // Ejemplo de isograma
console.log(`Isograma: ${esIsograma(texto2)}`); // Devuelve true

const texto3 = "The quick brown fox jumps over the lazy dog"; // Ejemplo de pangrama
console.log(`Pangrama: ${esPangrama(texto3)}`); // Devuelve true
