let palabras = ["agente", "secreto", "mision"];

function decodificarMensaje(mensajeCodificado) {
    let mensajeDecodificado = "";
    mensajeCodificado = mensajeCodificado.split(" ");
    for (let i = 0; i < mensajeCodificado.length; i++) {
        if (mensajeCodificado[i] == "gato") {
            mensajeDecodificado = mensajeDecodificado.concat(palabras[0] + " ");
        } else if (mensajeCodificado[i] == "rojo") {
            mensajeDecodificado = mensajeDecodificado.concat(palabras[1] + " ");
        } else if (mensajeCodificado[i] == "hambre") {
            mensajeDecodificado = mensajeDecodificado.concat(palabras[2] + " ");           
        }
    }
    
    return mensajeDecodificado
}

let mensajeCodificado = prompt("Ingrese el mensaje a decodificar: ");
console.log(decodificarMensaje(mensajeCodificado));