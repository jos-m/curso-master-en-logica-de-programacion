function escalera (num){

    let escalera = ""
    for (let i = 1; i <= num; i++){
        escalera += `${"[-]".repeat(i)}\n`
    }
    return escalera.slice(0,-1); // Quita el salto de linea del final
}

console.log(escalera(9))

// Codigo del curso
function escalera(num) {

    let escalera = ""
    for (let i = 1; i <= num; i++) {
      escalera += `${"[-]".repeat(i)}\n`;
      console.log(escalera);
    }
    return escalera;
  }
  
  console.log(escalera(9).slice(0, -1))