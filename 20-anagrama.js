function anagramas(str, str2) {
  return cleaner(str) === cleaner(str2);
}
function cleaner(str) {
  return str.replace(/[^\w]/gi, "").split("").sort().join("").toLowerCase();
}

console.log(anagramas("ser?gio", "riesgo"));

// Codigo del curso :
function limpiarTexto(texto) {
  return texto
    .replace(/[^\w]/gi, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagramas(texto1, texto2) {
  return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(limpiarTexto('SerGio !! -.,'));

console.log(anagramas('SerGio !! -.,', ' sergIO???;:"'));
