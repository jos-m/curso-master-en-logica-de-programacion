// entendible
function trinanguloAsteriscos(num) {
    let triangle = ``;
    let espacios = num-1

    for (let i = 0; i < num ; i++) {
        triangle+= ' '.repeat(espacios) + '*'.repeat(i) + "*".repeat(i+1)+'\n'
        espacios--;
    }
    return triangle;
}
console.log(trinanguloAsteriscos(4));

// Codigo del curso:
function triangulo(numero) {
  let mitad = Math.floor(numero - 1);
  let resultado = '';

  // bucle total filas
  for (let fila = 0; fila < numero; fila++) {
    let nivel = '';

    // bucle para pintar asteriscos y espacios
    for (let columna = 0; columna < (2 * numero - 1); columna++) {
      if (mitad - fila <= columna && mitad + fila >= columna) {
        nivel += '*';
      } else {
        nivel += ' ';
      }
    }

    resultado += nivel + '\n';
  }
  return resultado;
}

console.log(triangulo(4));

