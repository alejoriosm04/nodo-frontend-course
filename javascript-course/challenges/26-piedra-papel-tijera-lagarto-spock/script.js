function calcularGanador(partidas) {
    const reglas = {
        "piedra": ["tijera", "lagarto"],
        "papel": ["piedra", "spock"],
        "tijera": ["papel", "lagarto"],
        "lagarto": ["spock", "papel"],
        "spock": ["tijera", "piedra"]
    };

    let contadorP1 = 0;
    let contadorP2 = 0;

    for (const partida of partidas) {
        const jugadaP1 = partida[0];
        const jugadaP2 = partida[1];

        if (jugadaP1 === jugadaP2) {
            // Empate
            continue;
        }

        if (reglas[jugadaP1].includes(jugadaP2)) {
            contadorP1++;
        } else {
            contadorP2++;
        }
    }

    if (contadorP1 > contadorP2) {
        return "Player 1";
    } else if (contadorP2 > contadorP1) {
        return "Player 2";
    } else {
        return "Tie";
    }
}

const partidas = [["piedra", "tijera"], ["papel", "lagarto"], ["spock", "piedra"]];
const ganador = calcularGanador(partidas);
console.log(`El ganador es: ${ganador}`);
