function arrayCuadrado(arr){
    return arr.filter(el=> typeof(el)==="number")
              .map(el => el*el);
}
console.log(arrayCuadrado(["hola",2,6,7,9,90]));

// Codigo del curso:
function alCuadrado(numeros) {
  let numeros_cuadrados = numeros
    .filter(el => typeof el == 'number')
    .map(el => Math.pow(el, 2));

  return numeros_cuadrados;
}

console.log(alCuadrado([3, 4, 5, 'hola', true, ['hola']]));
