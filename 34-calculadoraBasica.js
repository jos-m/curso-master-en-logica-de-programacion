function calculadora(num1, num2) {
    try {
        if (!isNaN(num1) && !isNaN(num2)){
            return `la suma de ambos numeros es: ${num1 + num2}\nla resta de ambos numeros es: ${num1-num2}\nla multiplicación de ambos numeros es: ${num1*num2}\nla division de ambos numeros es: ${(num1/num2).toFixed(2)}\n`
        }else throw Error("Ingresar solo numeros")
    } catch (error) {
        console.error(error);
    }
}
console.log(calculadora(5,'6'));

// Codigo del curso:
function calculadora(numero1, numero2) {
  let resultado = `
  La suma es: ${numero1 + numero2}
  La resta es: ${numero1 - numero2}
  La mutiplicacion es: ${numero1 * numero2}
  La division es: ${numero1 / numero2}
  `;
  return resultado;
}

console.log(calculadora(10, 10));
