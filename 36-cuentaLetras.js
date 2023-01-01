function cuentaLetras(string) {
    const textoLimpio = string.replace(/[^aáAÁeéEÉiíIÍoOóÓuúUÚ\w]/gi, "").replace(/[\d]/gi,"")
    console.log(textoLimpio)
    let vocales = 0;
    let consonates =0;
    for (const letter of textoLimpio) {
        if(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi.test(letter)){
            vocales++
        } else consonates++
    }
    return `
    vocales: ${vocales}
    consonates: ${consonates} `
}

console.log(cuentaLetras("Aáéíóóígghjgo"));

// Codigo del curso:
function cuentaLetras(texto) {
  let consonantes = 0, vocales = 0, texto_limpio = '';
  texto_limpio = texto
    .split('')
    .filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra))
    .join('');

  for (let letra of texto_limpio) {
    if (/[áéíóúaeiou]/gi.test(letra)) {
      vocales++;
    } else {
      consonantes++;
    }
  }

  return [consonantes, vocales];
}

let letras = cuentaLetras('Hola !! . , - que tal á 1 89fd');

console.log('Consonantes:', letras[0]);
console.log('Vocales:', letras[1]);
