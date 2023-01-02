function valorAltoY_bajo(arr) {
    let valores = arr.sort((a,b)=> a-b)
    return `
    valor mas alto: ${valores[valores.length-1]}
    valor mas bajo: ${valores[0]} `
}
console.log(valorAltoY_bajo([1,2,3,6,5,2]));

// Codigo del curso:
function altoBajo(numeros) {
  let ordenados = numeros.sort((a, b) => a - b);

  return {
    bajo: ordenados[0],
    alto: ordenados[ordenados.length - 1]
  }
}

console.log(altoBajo([88, 12, 41, 31, 74, 95, 63]));
