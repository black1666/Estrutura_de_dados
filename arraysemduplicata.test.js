// mergeArrays.js
function arraysemduplicata(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    return [...new Set(mergedArray)];
  }
  
  module.exports = arraysemduplicata;
  
  // mergeArrays.test.js
  const arraysemduplicata = require('./mergeArrays');
  
  test('arraysemduplicata removes duplicates and merges arrays', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [3, 4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
  
    expect(mergeAndRemoveDuplicates(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata works with empty arrays', () => {
    const array1 = [];
    const array2 = [];
    const expected = [];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata handles arrays with no common elements', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  
  test('arraysemduplicata handles arrays with all duplicates', () => {
    const array1 = [1, 1, 1];
    const array2 = [1, 1, 1];
    const expected = [1];
  
    expect(arraysemduplicata(array1, array2)).toEqual(expected);
  });
  