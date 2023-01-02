function verificarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

// Codigo del curso:
function comprobarEmail(email){
  return /^\w+@\w+\.\w+$/gi.test(email);
}

console.log(comprobarEmail('correo@gmail.com'));
