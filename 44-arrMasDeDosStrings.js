function masDeDosStrings(arr) {
    return arr.filter((el)=>{
        if(el.match(/[\w][\s][\w]/)){
            return el
        }
    })
}
console.log(masDeDosStrings(["hola asdas", "asds", "asdassdfsdsdf", " "]));

// Codigo del curso:
function dosPalabras(elementos) {
  let nuevos_elementos = [];
  for (palabra of elementos) {
    if (palabra.split(' ').length >= 2) {
      nuevos_elementos.push(palabra);
    }
  }

  return nuevos_elementos;
}

console.log(dosPalabras(['hola', 'hola que tal', 'san francisco', 'ciudad real', 'victor']));
