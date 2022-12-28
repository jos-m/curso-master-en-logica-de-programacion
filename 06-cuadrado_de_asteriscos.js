function cuadradoAsteriscos(num) {
    let cuadrado = ""

    for (let i = 0; i < num; i++) {
        cuadrado += "*"
    }

    cuadrado += "\n";

    for (let i = 0; i < num - 2; i++) {
        cuadrado += `*${" ".repeat(num - 2)}*\n`
    }

    for (let i = 0; i < num; i++) {
        cuadrado += "*"
    }

    return cuadrado;
}
console.log(cuadradoAsteriscos(20));

// Codigo del curso
function lado(numero) {
    let lado = "";
    for (let i = 0; i < numero; i++) {
        lado += "*";
    }
    return lado;
}

function cuadrado(numero) {
    let dibujo = lado(numero) + "\n";
    let contenido = "";

    for (let i = 0; i < numero - 2; i++) {
        contenido = "*";

        for (let x = 0; x < numero - 2; x++) {
            contenido += " ";
        }

        contenido += "*";
        dibujo += contenido + "\n";
    }

    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(4));
