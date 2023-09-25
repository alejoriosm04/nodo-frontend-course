function existeViernes13(mes, año) {
    const fecha = new Date(año, mes - 1, 13); 

    if (fecha.getDay() === 5) {
        return true;
    } else {
        return false;
    }
}

const mes = 9;
const año = 2023;
const resultado = existeViernes13(mes, año);

if (resultado) {
    console.log(`¡Sí existe un viernes 13 en ${mes}/${año}!`);
} else {
    console.log(`No existe un viernes 13 en ${mes}/${año}.`);
}
