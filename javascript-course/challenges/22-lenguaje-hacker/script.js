const abecedarioMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const leetCode = {
    a: '4',
    b: 'I3',
    c: '[',
    d: ')',
    e: '3',
    f: '|=',
    g: '&',
    h: '#',
    i: '1',
    j: ',_|',
    k: '>|',
    l: '£',
    m: '[V]',
    n: '^/',
    o: '0',
    p: '|*',
    q: '(_,)',
    r: 'I2',
    s: '5',
    t: '7',
    u: '(_)',
    v: '|/',
    w: 'VV',
    x: 'Ж',
    y: '`/',
    z: '7_'
};

function hacker(texto) {
    let textoHacker = "";
    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        if (abecedarioMinusculas.includes(texto[i])) {
            textoHacker += leetCode[texto[i]];
        } else {
            textoHacker += texto[i];
        }
    }

    return textoHacker;
}

let texto = prompt("Ingrese el texto: ");
console.log(hacker(texto));