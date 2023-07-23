let nombre = prompt("¿Cuál es tu nombre?")
let apellido = prompt("¿Cuál es tu apellido?")

let username = nombre.substring(0,3) + apellido.substring(0,3) + Math.floor(Math.random() * 100)
console.log(username)