function tipoAngulo(grados){

    if(typeof(grados) !== "number") return "ingresar solo valores numericos";
    if(grados > 360) return "Angulo fuera de rango"

    switch(true){
        case grados === 0: return "Angulo nulo";
        case grados === 360: return "Angulo completo"
        case grados === 180: return "Angulo LLano";
        case grados === 90: return "Angulo recto";
        case grados<90&&grados<180: return "Angulo agudo";
        case grados>90&&grados<180: return "Angulo obtuso";
        case grados > 180: return "Angulo Concavo";
        case grados < 180: return "Angulo convexo";
    }
}

console.log(tipoAngulo(80))
console.log(tipoAngulo(350));

// Codigo del curso
function angulo(abertura){
  let resultado = 'Angulo Completo';

  if(abertura < 90){
    resultado = 'Angulo Agudo';
  } else if(abertura === 90){
    resultado = 'Angulo Recto';
  } else if(abertura > 90 && abertura < 180){
    resultado = 'Angulo Obtuso';
  } else if(abertura === 180){
    resultado = 'Angulo Llano';
  } else if(abertura > 180 && abertura < 360){
    resultado = 'Angulo Concavo';
  }

  return resultado;
}

console.log(angulo(361));
