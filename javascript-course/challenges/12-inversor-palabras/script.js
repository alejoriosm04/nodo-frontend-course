function invertirPalabras(frase) {
    let reverseWordArr = frase.split(" ").map(palabra => palabra.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}

let frase = prompt("Ingrese la oración");
console.log(invertirPalabras(frase));