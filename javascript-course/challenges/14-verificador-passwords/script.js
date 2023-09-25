function checkPassword(password) {
    let correct = true;
    if (password.length < 8) {
        console.log("La contraseña debe tener al menor 8 caracteres de longitud");
        correct = false;
    }
    if (!/[A-Z]/.test(password)) {
        console.log("Debe tener al menos una mayúscula");
        correct = false;
    }
    if (!/[a-z]/.test(password)) {
        console.log("Debe tener al menos una minuscula");
        correct = false;
    }
    if (!/[0-9]/.test(password)) {
        console.log("Debe tener al menos un número");
        correct = false;
    }

    return correct
}

const password = prompt("Ingrese su contraseña");
if (checkPassword(password)) {
    console.log("Contraseña valida");
} else {
    console.log("Contraseña inválida");
}