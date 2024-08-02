//Escreva uma função que receba dois arrays e retorne um novo array contendo todos
//os elementos dos dois arrays, sem duplicatas.

/**
 * Mescla dois arrays e remove elementos duplicados.
 *
 * @param {Array} arr1 - O primeiro array a ser mesclado.
 * @param {Array} arr2 - O segundo array a ser mesclado.
 * @returns {Array} Um novo array contendo todos os elementos de arr1 e arr2, sem duplicatas.
 */
function arraysemduplicata(arr1, arr2) {
  // Concatena os dois arrays
  const mergedArray = [...arr1, ...arr2];
  
  // Converte o array resultante em um Set para remover duplicatas e depois volta a um array
  return [...new Set(mergedArray)];
}

// Exemplo de uso:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result = arraysemduplicata(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
