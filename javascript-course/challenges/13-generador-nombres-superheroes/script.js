function generadorNombreSuperheroe(nombre, animal) {
    let nombreSuperheroe = animal[0].toUpperCase() + animal.slice(1) + " " + nombre;
    return nombreSuperheroe
}

const nombre = prompt("Ingresa tu nombre");
const animal = prompt("Ingresa tu animal favorito");

console.log(generadorNombreSuperheroe(nombre, animal));