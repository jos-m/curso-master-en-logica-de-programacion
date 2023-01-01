function tablaReductoraEn8(num) {

    let list8 = `--- Del ${num} hasta 0 ---\n`;

    for (var i = num; i >= 0; i -= 8) {
        list8 += `nº ${i}\n`
    }

    if (num % 8 != 0) { list8 += "nº 0\n" }

    list8 += '--- FIN ---'
    return list8;
}
console.log(tablaReductoraEn8(109));

// Codigo del curso

function hastaCero(numero) {
    let resultado = `--- Del ${numero} al 0 --- \n`;

    while (numero > 0) {
        resultado += `- n° ${numero} \n`;
        numero -= 8;
    }
    if (numero <= 0) {
        resultado += "- n° 0 \n";
    }

    resultado += '--- FIN ---';

    return resultado;
}

console.log(hastaCero(73));