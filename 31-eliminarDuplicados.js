function eliminarDuplicados (arr){

    return arr.filter( (el,i)=> {if(typeof(el)=== "number" && arr.indexOf(el) === i) return el;});

}

let arr = ["hola",2,6,2,60,6,5,5,4,"chao"]
console.log(eliminarDuplicados(arr));


// Codigo del curso:
function eliminarDuplicados(elementos) {
  elementos = elementos.filter(elemento => {
    return typeof elemento === 'number';
  });

  let sin_duplicados = new Set(elementos);
  return Array.from(sin_duplicados);
}

console.log(eliminarDuplicados(['uno', 'dos', 1, 2, 3, 2, 3, 'hola']));
