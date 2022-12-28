function coincidencias(frase, palabra){
    
    return frase.toLowerCase()
                .replace( /[.,!¿?"']/gi, "" )
                .split(" ")
                .filter( (el) => el === palabra )
                .length

}
console.log(coincidencias("hola, idioma caracter hola!! victor victor robles hola!!", "victor"))

module.exports = coincidencias;

// Codigo copiado del curso. Ya que no tiene repositorio propio.
function conincidencias2(frase, busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-?¿]/gi, "");
  
    let resultado = 0;
  
    if (texto_limpio.includes(busqueda)) {
      let palabras = texto_limpio.split(" ");
  
      let mapa = {};
      for (const palabra of palabras) {
        if (mapa[palabra]) {
          mapa[palabra]++;
        } else {
          mapa[palabra] = 1;
        }
      }
      resultado = mapa[busqueda];
    } else {
      resultado = 0;
    }
  
    return resultado;
  }
  
  console.log(
    conincidencias2("Hola robles, Que tal ROBLES, soY- VICTOR robles?", "robles")
  );