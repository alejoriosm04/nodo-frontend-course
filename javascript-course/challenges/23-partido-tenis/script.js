function juegoTenis(jugadas) {
    let i = 0;
    let puntos = ["Love", "15", "30", "40"];
    let puntosP1 = 0;
    let puntosP2 = 0;
    console.log(jugadas);

    while (i < jugadas.length) {
        if (jugadas[i] === "P1") {
            puntosP1++;
            if (puntosP1 === 3 && puntosP2 === 3) {
                console.log("Deuce");
            } else if (puntosP1 === 4 && puntosP2 < 3) {
                console.log("Ha ganado el P1");
                break;
            } else if (puntosP1 < 4 && puntosP2 < 4) {
                console.log(puntos[puntosP1] + " - " + puntos[puntosP2]);
            }
        } else if (jugadas[i] === "P2") {
            puntosP2++;
            if (puntosP1 === 3 && puntosP2 === 3) {
                console.log("Deuce");
            } else if (puntosP2 === 4 && puntosP1 < 3) {
                console.log("Ha ganado el P2");
                break;
            } else if (puntosP2 < 4 && puntosP1 < 4) {
                console.log(puntos[puntosP1] + " - " + puntos[puntosP2]);
            }
        }

        if (puntosP1 >= 3 && puntosP2 >= 3) {
            if (puntosP1-puntosP2 === 1) {
                console.log("Ventaja P1");
            } else if (puntosP2-puntosP1 === 1) {
                console.log("Ventaja P2");
            } else if (puntosP1-puntosP2 === 2) {
                console.log("Ha ganado el P1");
                break;
            } else if (puntosP2-puntosP1 === 2) {
                console.log("Ha ganado P2");
                break;
            } 
        }

        i++;
        
    }
}

let jugadas = prompt("Ingrese las jugadas: ");
let jugadasArray = jugadas.split(" ");

juegoTenis(jugadasArray);