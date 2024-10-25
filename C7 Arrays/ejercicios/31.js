function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var textoSeparado = texto.split('');
  var letrasInvertidas = [];
  for (let i = 0; i < textoSeparado.length; i++) {
    const element = textoSeparado[i];
    letrasInvertidas.unshift(element);
  }

  var fraseInvertida = letrasInvertidas.join('');
  return fraseInvertida;
}

module.exports = invertirTexto;
