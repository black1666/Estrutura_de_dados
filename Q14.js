//Escreva uma função que encontre o segundo maior número em um array de
//números.

/**
 * Encontra o segundo maior número em um array de números.
 *
 * @param {number[]} arr - O array de números.
 * @returns {number} O segundo maior número no array.
 * @throws {Error} Se o array tiver menos de dois elementos ou não houver um segundo maior número.
 */
function encontrarSegundoMaiorNumero(arr) {
    if (arr.length < 2) {
      throw new Error('Array deve ter pelo menos dois elementos');
    }
  
    let maior = -Infinity;
    let segundoMaior = -Infinity;
  
    for (let num of arr) {
      if (num > maior) {
        segundoMaior = maior;
        maior = num;
      } else if (num > segundoMaior && num !== maior) {
        segundoMaior = num;
      }
    }
  
    if (segundoMaior === -Infinity) {
      throw new Error('Não há segundo maior número no array');
    }
  
    return segundoMaior;
  }
  
  module.exports = encontrarSegundoMaiorNumero;
  