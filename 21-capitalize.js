function capitalize(str){
	 
	 return str.split(" ")
	           .map( (el)=>{
	           	el = el[0].toUpperCase()+el.slice(1);
	           	return el;
	           } ).join(" ")
	
};
console.log(capitalize("hola mundo del ssd con ?kwl"));


// Codigo del curso:
function recortar(texto, hasta) {
  let resultado = '';

  if (typeof texto === 'string' && typeof hasta === 'number') {
    resultado = texto.substring(0, hasta);
  } else {
    resultado = 'Introduce bien los datos!!';
  }
  return resultado;
}

console.log(
  recortar('Hello World Perú!!!', 5)
)
