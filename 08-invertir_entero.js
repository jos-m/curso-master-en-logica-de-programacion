function invertirEntero(num) {

    return parseInt(String(num).split("").reverse().join("")) * Math.sign(num);

}

console.log(invertirEntero(-1007));

// Codigo del curso

function invertirNumero(numero) {
    let invertido = parseInt(
        numero
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(numero);
    return invertido;
}

console.log("El número invertido es", invertirNumero(15));

