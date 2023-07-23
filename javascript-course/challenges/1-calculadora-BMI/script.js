let pesoKg = prompt("¿Cuál es tu peso en kilogramos?")
let alturaM = prompt("¿Cuál es tu altura en metros?")

let BMI = pesoKg / (alturaM * alturaM)
console.log(BMI)

if (BMI < 18.5) {
    console.log("Tu BMI es " + BMI + " y estás bajo de peso")
} else if (BMI >= 18.5 && BMI < 25) {
    console.log("Tu BMI es " + BMI + " y estás en tu peso normal")
} else if (BMI >= 25 && BMI < 30) {
    console.log("Tu BMI es " + BMI + " y estás en sobrepeso")
} else {
    console.log("Tu BMI es " + BMI + " y estás en obesidad")
}