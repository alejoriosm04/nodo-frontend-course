const abecedarioMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
const abecedarioMayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function encriptador(texto) {
    let mensajeEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        if (!abecedarioMayusculas.includes(texto[i]) && !abecedarioMinusculas.includes(texto[i])) {
            mensajeEncriptado += texto[i];
        }

        if (abecedarioMinusculas.includes(texto[i])) {
            if (abecedarioMinusculas.indexOf(texto[i]) < abecedarioMinusculas.length - 1) {
                mensajeEncriptado += abecedarioMinusculas[abecedarioMinusculas.indexOf(texto[i]) + 1];
            } else {
                mensajeEncriptado += abecedarioMinusculas[0];
            }
        }

        if (abecedarioMayusculas.includes(texto[i])) {
            if (abecedarioMayusculas.indexOf(texto[i]) < abecedarioMayusculas.length - 1) {
                mensajeEncriptado += abecedarioMayusculas[abecedarioMayusculas.indexOf(texto[i]) + 1];
            } else {
                mensajeEncriptado += abecedarioMayusculas[0];
            }
        }
    }

    return mensajeEncriptado;
}

let texto = prompt("Ingrese el texto: ");
console.log(encriptador(texto));