function cuadrados(num) {
    for (let i = 0; i <= num; i++) {
        console.log(Math.pow(i,2))
    }
}
cuadrados(5);

// Codigo del curso:
function cuadrado(numero){
  return numero * numero;
}

function mostrar(numero){
  for (let i = 0; i <= numero; i++) {
    console.log(cuadrado(i))
  }
}

mostrar(7);
