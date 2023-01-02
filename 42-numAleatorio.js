function numAleatorio(min,max) {
    return Math.round(Math.random() * (max-min) + min)
}
console.log(numAleatorio(2,6))

// ciclo for para generarlos:
for (let i = 0; i < 10; i++) {
  console.log(aleatorio(2, 6));
}
