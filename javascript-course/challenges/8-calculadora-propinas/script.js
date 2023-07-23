let totalFactura = prompt("¿Cuál es el total de la factura?")
let calidadServicio = prompt("¿Qué tan buena fue la calidad del servicio? De 1 a 5")
let porcentajePropina = calidadServicio * 3

let propina = totalFactura * (porcentajePropina / 100)
alert(`La propina es de $${propina}`)