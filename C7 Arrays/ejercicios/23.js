function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var contador = 0;
  var limite = 10;
  var suma = num;
  var arreglo = [];

  while (contador < limite) {
    suma += 2;
    arreglo.push(suma);
    contador++;

    if (suma === contador) return "Se interrumpió la ejecución";
  }

  return arreglo;
}

module.exports = breakStatement;
