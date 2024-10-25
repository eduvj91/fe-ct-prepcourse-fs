function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var contador = 0;
  var suma = 0;
  var promedio = 0;

  resultadosTest.forEach((test) => {
    suma += test;
    contador++;
  });

  promedio = suma / contador;
  return promedio;
}

module.exports = promedioResultadosTest;
