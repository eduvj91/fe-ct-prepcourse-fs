function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var invertido = [];

  for (var i = 0; i < array.length; i++) {
    invertido.unshift(array[i]);
  }

  return invertido;
}

module.exports = invertirArray;
