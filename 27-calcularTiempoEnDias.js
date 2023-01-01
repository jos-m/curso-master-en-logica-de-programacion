function calcularTiempoEnDias(num){

    let anios = 0;
    let meses = 0;
    if (num > 364){
        anios = Math.floor(num/365);
        num = num % 365;
    }
    if (num > 29){
        meses = Math.floor(num/30);
        num = num % 30
    }
    return `${anios} años, ${meses} meses y ${num} dias`

};

console.log(calcularTiempoEnDias(30));

// Codigo del curso:
function calcularDias(dias) {
  let years = Math.floor(dias / 365);
  let dias_restantes = (dias % 365);
  let meses = Math.floor(dias_restantes / 30);
  dias_restantes = dias_restantes % 30;

  return `Equivale a ${years} años, ${meses} meses y ${dias_restantes} dias.`
}

console.log(calcularDias(920));
