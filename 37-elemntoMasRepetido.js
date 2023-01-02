// No se entiende. 
function elementoMasRepetido(param) {

    let map = {};

    if(Array.isArray(param)){
        param = param.join("")
    }

    param = param.trim()

    for (const letter of param) {
        if (!map[letter]){
            map[letter] = 1;
        }else{
            map[letter]++
        }
    }
    let mayor = []
    Object.entries(map).forEach(([clave,valor])=>{
        if (!mayor[0] || valor > mayor[0][1]){
            mayor = [[clave, valor]]
        }else if (valor == mayor[0][1]){
            mayor.push([clave, valor])
        }
    })
    if (mayor.length<2){
        return `carater más repetido '${mayor[0][0]}' ${mayor[0][1]} veces`
    }else{
        let caracteres = mayor.reduce((acc,b)=> acc +" "+ b[0],"")

        return `Caractermes mas repetidos : "${caracteres}" ${mayor[0][1]} veces cada uno`
    }

}
console.log(elementoMasRepetido([" ", "saaddee,ff"]));

// Codigo del curso:
function elQueMasAparece(datos) {
  let mapeo = {}, mas_frecuente = '', mayorValor = 0;

  if (typeof datos === 'string') {
    datos = datos.split(' ');
  }

  for (let elemento of datos) {
    if (mapeo[elemento]) {
      mapeo[elemento]++;
    } else {
      mapeo[elemento] = 1;
    }
  }

  for (let elemento in mapeo) {
    if (mapeo[elemento] > mayorValor) {
      mayorValor = mapeo[elemento];
      mas_frecuente = elemento;
    }
  }

  // console.log(mayorValor, mas_frecuente);
  return {
    'mas_frecuente': mas_frecuente,
    'mayorValor': mayorValor
  }
}

console.log(elQueMasAparece('hola mundo hola hola'));
console.log(elQueMasAparece([1, 2, 3, 4, 1, 3, 4, 4]));
