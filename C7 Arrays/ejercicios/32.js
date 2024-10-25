function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var limpio = string.toLowerCase();
  var palabra = string.split('').reverse().join('');

  if (limpio === palabra) {
    return true;
  }

  return false;
}

module.exports = esPalindromo;
