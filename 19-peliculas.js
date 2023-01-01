function peliculas(arr) {
  let vistos = `Peliculas vistas : \n`;
  let noVistos = `\nPeliculas por ver : \n`;

  arr.forEach((element) => {
    if (element.visto) {
      vistos += element.titulo + "\n";
    } else {
      noVistos += element.titulo + "\n";
    }
  });
  return vistos + noVistos;
}

let pelis = [
  { titulo: "El señor de los anillos", director: "Peter Jackson", visto: true },
  { titulo: "La Liga de la Justicia", director: "Zack Snyder", visto: false },
  { titulo: "Los Vengadores: Endgame", director: "Joe Russo", visto: false },
  { titulo: "Batman vs Superman", director: "Zack Snyder", visto: true },
];

console.log(peliculas(pelis));


// Codigo del curso:
function misPeliculas(peliculas) {
  for (const pelicula of peliculas) {
    let paraMostrar = `'${pelicula.titulo} de ${pelicula.director}'`;
    if (pelicula.visto) {
      console.log("Ya has visto:", paraMostrar);
    } else {
      console.log("Te falta por ver:", paraMostrar);
    }
  }
  return peliculas;
}

const coleccionPeliculas = [
  { titulo: "El señor de los anillos", director: "Peter Jackson", visto: true },
  { titulo: "La Liga de la Justicia", director: "Zack Snyder", visto: false },
  { titulo: "Los Vengadores: Endgame", director: "Joe Russo", visto: false },
  { titulo: "Batman vs Superman", director: "Zack Snyder", visto: true },
];

misPeliculas(coleccionPeliculas);
