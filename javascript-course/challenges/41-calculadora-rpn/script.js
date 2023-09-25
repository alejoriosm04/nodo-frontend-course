function evaluarRPN(expresion) {
    const stack = [];
    const elementos = expresion.split(' ');

    for (const elemento of elementos) {
        if (esNumero(elemento)) {
            stack.push(Number(elemento));
        } else if (esOperador(elemento)) {
            if (stack.length < 2) {
                return "Error: expresión RPN incorrecta";
            }
            const num2 = stack.pop();
            const num1 = stack.pop();
            const resultado = realizarOperacion(num1, num2, elemento);
            stack.push(resultado);
        }
    }

    if (stack.length !== 1) {
        return "Error: expresión RPN incorrecta";
    }

    return stack[0];
}

function esNumero(valor) {
    return !isNaN(Number(valor));
}

function esOperador(valor) {
    return ['+', '-', '*', '/'].includes(valor);
}

function realizarOperacion(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return Infinity;
            }
            return num1 / num2;
    }
}


console.log(evaluarRPN("3 4 +")); // Resultado: 7
console.log(evaluarRPN("5 3 4 + *")); // Resultado: 35
console.log(evaluarRPN("5 1 2 + 4 * + 3 -")); // Resultado: 14
