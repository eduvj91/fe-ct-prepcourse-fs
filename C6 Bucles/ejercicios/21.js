function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Caso base: 0 no es potencia de 2
  if (numero <= 0) {
    return false;
  }

  // Dividimos repetidamente entre 2 hasta que sea 1
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false; // Si hay un resto, no es potencia de 2
    }
    numero /= 2;
  }

  // Si llegamos aquí, el número era una potencia de 2
  return true;
}

module.exports = esPotenciaDeDos;
