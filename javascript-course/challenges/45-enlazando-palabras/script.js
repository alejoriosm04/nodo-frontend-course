function enlazarPalabras(listaPalabras) {
    function encontrarSecuencia(palabraActual, palabrasRestantes) {
        if (palabrasRestantes.length === 0) {
            return true; 
        }

        for (let i = 0; i < palabrasRestantes.length; i++) {
            const palabraSiguiente = palabrasRestantes[i];
            if (palabraActual.slice(-1) === palabraSiguiente[0]) {
                const nuevasPalabrasRestantes = palabrasRestantes.slice(0, i).concat(palabrasRestantes.slice(i + 1));
                if (encontrarSecuencia(palabraSiguiente, nuevasPalabrasRestantes)) {
                    return true;
                }
            }
        }

        return false;
    }

    if (listaPalabras.length > 0) {
        return encontrarSecuencia(listaPalabras[0], listaPalabras.slice(1));
    }

    return false;
}

console.log(enlazarPalabras(["apple", "elephant", "tiger", "rat", "tulip"]));
console.log(enlazarPalabras(["apple", "banana", "cherry"]));
