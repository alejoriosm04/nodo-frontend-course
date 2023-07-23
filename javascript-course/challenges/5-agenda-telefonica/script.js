let agendaTelefonica = {
    "Alejandro": 958123456,
    "Santiago": 958654321,
}

let cantidadAñadir = prompt("¿Cuántos contactos quieres añadir?")

for (let i = 0; i < cantidadAñadir; i++) {
    let nombre = prompt("Nombre del contacto")
    let telefono = prompt("Teléfono del contacto")
    agendaTelefonica[nombre] = telefono
}

let buscar = prompt("¿A quién quieres buscar?")

if (agendaTelefonica[buscar]) {
    alert(`El teléfono de ${buscar} es ${agendaTelefonica[buscar]}`)
} else {
    alert("No se ha encontrado el contacto")
}

console.log(agendaTelefonica)