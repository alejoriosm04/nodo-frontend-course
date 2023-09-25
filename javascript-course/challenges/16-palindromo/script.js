function esPalindromo(texto) {
    texto = texto.toLowerCase();
    texto = texto.replaceAll(" ", "");
    if (texto.split("").reverse().join("") == texto) {
        return true;
    }
    return false;
}

let texto = prompt("Ingresa tu texto:");
console.log(esPalindromo(texto) ? "Es palindromo" : "No es palindromo");