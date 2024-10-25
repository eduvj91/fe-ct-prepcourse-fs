function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multi = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    multi.push(element * i);
  }

  return multi;
}

module.exports = multiplicarElementosPorIndice;
