function factorial(num){

    if (num ==1) return num;

    return num * factorial(num-1)
}

console.log(factorial(5));

// Codigo del curso:
function factorial(numero) {
  let resultado = 1;

  for (let i = 0; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log('El resultado de 3 es: ', factorial(3));
