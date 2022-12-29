function contarImpares(num) {

    let counter = 0;

    for (i = 0; i <= num; i++) {
        counter = (i % 2 !== 0) ? counter += 1 : counter;
    }
    return counter;

}

console.log(contarImpares(101));

// Codigo del curso
function impares(numero1, numero2) {
    let contador = 0;

    while (numero1 < numero2) {
        if (numero1 % 2 !== 0) contador++;

        numero1++;
    }

    return contador;
}

console.log("Números impares:", impares(1, 100));
