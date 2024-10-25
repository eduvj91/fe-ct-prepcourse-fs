function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayus = array.map((text) => {
    return text.toUpperCase();
  });

  return mayus;
}

module.exports = convertirStringAMayusculas;
