// Cuenta mayusculas y minusculas.
function mayusMinus(str){
	
	  let mayus =0;
	  let minus =0;
	
	  for(let i = 0; i < str.length;i++){
	  	
	  	   if (str[i].charCodeAt()>64 && str[i].charCodeAt()<91){
	  	   	mayus++;
	  	   }else if (str[i].charCodeAt()>90 && str[i].charCodeAt()<123) minus++;
	  	   	
	  }
	  
	  if (mayus>minus){
	  	return str.toUpperCase();
	  }else if(mayus<minus){ return str.toLowerCase();}else return str;
	  
}
console.log(mayusMinus("HOla"));

// Si hay mas mayusculas todo a mayusculas sino lo contrario.
function mayusMinus(texto) {
  let mayusculas = 0;
  let minusculas = 0;
  let resultado = '';

  for (let letra of texto) {
    if (/[A-Z]/.test(letra)) {
      mayusculas++;
    } else {
      minusculas++;
    }
  }
  console.log(mayusculas, minusculas);

  if (mayusculas > minusculas) {
    resultado = texto.toUpperCase();
  } else {
    resultado = texto.toLowerCase();
  }

  return resultado;
}

console.log(mayusMinus('Hola MUNDO'));

// Codigo del curso:
function enMayuscula(texto) {
  let resultado = '';

  for (letra in texto) {
    if (texto[letra - 1] === ' ' || parseInt(letra) === 0) {
      resultado += texto[letra].toUpperCase();
    } else {
      resultado += texto[letra];
    }
  }
  return resultado;
}

console.log(enMayuscula('hello world perú ...'));

// Otra solución tambien del curso:
function enMayuscula2(texto){
  let palabras = [];

  for (let palabra of texto.trim().split(' ')){
    palabras.push(palabra[0].toUpperCase() + palabra.substring(1));
  }

  return palabras.join(' ');
}

console.log(enMayuscula2('   hola mundo   '));
