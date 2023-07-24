function validadorTarjetasCredito(tarjetaCredito) {
    let arrayTarjetaCredito = tarjetaCredito.split("")

    for (let i = 1; i < arrayTarjetaCredito.length; i+=2) {
        arrayTarjetaCredito[i] = arrayTarjetaCredito[i] * 2
        console.log(arrayTarjetaCredito[i])
        if (arrayTarjetaCredito[i] > 9) {
            arrayTarjetaCredito[i] = arrayTarjetaCredito[i].toString().split("")
            arrayTarjetaCredito[i] = parseInt(arrayTarjetaCredito[i][0]) + parseInt(arrayTarjetaCredito[i][1])
        }
    }

    let suma = 0
    for (const element of arrayTarjetaCredito) {
        suma += parseInt(element)
    }

    return suma % 10 == 0
}

let tarjetaCredito = prompt("Ingrese el número de su tarjeta de crédito")
console.log(validadorTarjetasCredito(tarjetaCredito))