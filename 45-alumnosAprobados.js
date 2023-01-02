function alumnosAprobados(alumnos) {
    let aprobados = 0;
    let reprobados = 0;
    for(let alumno of alumnos) {
        if(alumno.nota >=5){
            aprobados++;
        }else if (alumno.nota <5){
            reprobados++
        }
    }
    return `
    aprobados: ${aprobados}
    reprobados: ${reprobados}
    `
}
console.log(alumnosAprobados([{
    nombre : "juan",
    nota: 5
},
{
    nombre : "felipe",
    nota: 4
},
{
    nombre : "teresa",
    nota: 2
},
{
    nombre : "pedro",
    nota: 8
},{
    nombre : "javier",
    nota: 4
}]));

// Codigo del curso
function suspensos(alumnos) {
  let aprobados = 0, suspensos = 0;

  for (const alumno of alumnos) {
    if (alumno[1] >= 5) {
      aprobados++;
    } else {
      suspensos++;
    }
  }

  return {
    'aprobados': aprobados,
    'suspensos': suspensos
  }
}

console.log(suspensos([
  ['Victor', 10],
  ['Carlos', 4],
  ['Freddy', 8],
  ['Juan', 6],
  ['Selena', 5]
]));
