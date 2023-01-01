function divisores(num) {
    let textoImprimir = `Los divisores de ${num} son:\n`;

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) textoImprimir += i.toString() + ", ";
        if (i === num) { textoImprimir = textoImprimir.slice(0, -2) };
    }
    return textoImprimir;
}

console.log(divisores(27));


// Codigo del curso:
function divisor(numero, posible_divisor) {
    if (numero % posible_divisor === 0) {
        return posible_divisor;
    }

    return false;
}

function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        let esDivisor = divisor(numero, i);
        if (esDivisor) console.log(esDivisor);
    }
}

mostrarDivisores(15);