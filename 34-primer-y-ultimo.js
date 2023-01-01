function primerYultimo(arr) {
    return [arr[0],arr[arr.length - 1]]
}

console.log(primerYultimo([5,6,4,2,3,5,"sdf"]));

// Codigo del curso:
function primerYultimo(elementos) {
  let nuevosElementos = [];
  nuevosElementos.push(elementos[0], elementos[elementos.length - 1]);
  return nuevosElementos;
}

console.log(primerYultimo([100, 200, 300, 700]));
