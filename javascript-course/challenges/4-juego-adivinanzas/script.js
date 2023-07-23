let numeroAleatorio = Math.floor(Math.random() * 10)
let intentos = 0

while (intentos != 3) {
    let suposicion = prompt("Adivina el número entre 0 y 10")
    if (numeroAleatorio == suposicion) {
        console.log("¡Felicitaciones!")
        break
    } else if (Math.abs(numeroAleatorio-suposicion) < 3) {
        console.log("¡Cerca!")
        intentos++
    }
    else {
        console.log("¡Lejos!")
        intentos++
    }
}

if (intentos == 3) {
    console.log("¡Perdiste!")
    console.log("El número era " + numeroAleatorio)
}