function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[0] !== element) {
      return false;
    }
  }

  return true;
}

module.exports = todosIguales;
