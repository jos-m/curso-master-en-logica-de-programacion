function nCapicua(n){

    let cap = String(n).split("")
                       .reverse()
                       .join("");
    if (cap === String(n))return true;
    else return false;

}
console.log(nCapicua(2002));

// Codigo del curso:

function capi(numero) {
  let procesado = parseInt(numero
    .toString()
    .split('')
    .reverse()
    .join('')
  );
  return numero === procesado;
}

console.log(capi(2002));
