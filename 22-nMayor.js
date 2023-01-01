function nMayor(num,num2){
	let result = (num>num2)?`${num} es mayor ${num2}`:(num<num2)?`${num2} es mayor ${num}`:(num2===num)?`iguales`:`no son numeros`
	return result;
}
console.log(nMayor(2,2.5));


// Codigo del curso:
function mayorMenor(numero1, numero2) {
  let resultado = "";

  if (numero1 === numero2) {
    resultado = "Los numeros son iguales !!";
  } else if (numero1 > numero2) {
    resultado = "El numero mayor es: " + numero1 + "\n";
    resultado += "El numero menor es: " + numero2;
  } else if (numero1 < numero2) {
    resultado = "El numero mayor es:" + numero2 + "\n";
    resultado += "El numero menor es:" + numero1;
  } else {
    resultado = "Introduce numeros correctos";
  }

  return resultado;
}

console.log(mayorMenor(99, 180));
