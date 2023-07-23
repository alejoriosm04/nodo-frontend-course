let correoElectronico = prompt("Ingrese su correo electrónico")

let correoIncludesAt = correoElectronico.includes("@")
let AtCorreo = correoElectronico.substring(correoElectronico.indexOf("@"))
let correoIncludesDot = AtCorreo.includes(".")
let correoIncludesChar = correoElectronico.substring(0, correoElectronico.indexOf("@")).length >= 1
let correoIncludesCharDot = AtCorreo.substring(AtCorreo.indexOf(".") + 1).length >= 1

if (correoIncludesAt && correoIncludesDot && correoIncludesChar && correoIncludesCharDot) {
    alert("Correo electrónico válido")
} else {
    alert("Correo electrónico inválido")
}