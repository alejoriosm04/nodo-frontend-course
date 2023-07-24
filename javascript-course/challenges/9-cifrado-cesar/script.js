let mensaje = prompt("Ingrese su mensaje");
let desplazamientoCifrado = prompt("Ingrese el desplazamiento");
let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

mensaje = mensaje.toUpperCase();
let letraNueva
let i = 0
let mensajeCifrado = ""

for (let char of mensaje) {
    if (abecedario.indexOf(char) != -1) {
        letraNueva = abecedario.indexOf(char) + parseInt(desplazamientoCifrado)
        if (letraNueva > 25) {
            letraNueva = letraNueva % 26
        }
        mensajeCifrado += abecedario[letraNueva]
    } else {
        mensajeCifrado += char
    }
    i++    
}

alert(mensajeCifrado)