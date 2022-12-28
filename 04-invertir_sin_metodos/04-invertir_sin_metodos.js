function invertirStr(str) {
    let palabraFinal = ""
    for (let i = str.length - 1; i >= 0; i--) {
        palabraFinal += str[i]
    }
    return palabraFinal;
}

console.log(invertirStr("Christian"))

module.exports = invertirStr;

// Codigo del curso
function invertir(texto) {
    let invertido = "";

    for (let letra of texto) {
        invertido = letra + invertido;
    }

    return invertido;
}

// Usando metodos o funciones de javascript
function invertir2(texto) {
    return texto.split('').reverse().join('');
}

console.log("Texto invertido: ", invertir("Hola mundo"));
console.log("Texto invertido: ", invertir2("Hola mundo"));

