function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var contador = 0;
  var limite = 10;
  var cantidad = 2;
  var suma = num;
  var arreglo = [];

  while (contador < limite) {
    contador++;
    if (contador === 5) {
      continue;
    }
    suma += cantidad;
    arreglo.push(suma);
  }

  return arreglo;
}

module.exports = continueStatement;
