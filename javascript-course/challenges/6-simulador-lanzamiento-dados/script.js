let dado1 = lanzarDados()
let dado2 = lanzarDados()

function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1
}

let sumaDados = dado1 + dado2

console.log(`Dado 1: ${dado1}`)
console.log(`Dado 2: ${dado2}`)
console.log(`Suma: ${sumaDados}`)