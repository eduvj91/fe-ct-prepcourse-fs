function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesPedidos = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "Enero" || element === "Marzo" || element === "Noviembre") {
      mesesPedidos.push(element);
    }
  }

  if (mesesPedidos.length === 3) {
    return mesesPedidos;
  }

  return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
