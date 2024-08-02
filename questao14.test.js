const encontrarSegundoMaiorNumero = require('./encontrarSegundoMaiorNumero');

describe('encontrarSegundoMaiorNumero', () => {
  test('deve encontrar o segundo maior número em um array', () => {
    const numeros = [10, 20, 4, 45, 99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(45);
  });

  test('deve lançar um erro se o array tiver menos de dois elementos', () => {
    const numeros = [10];
    expect(() => encontrarSegundoMaiorNumero(numeros)).toThrow('Array deve ter pelo menos dois elementos');
  });

  test('deve lançar um erro se não houver segundo maior número', () => {
    const numeros = [10, 10];
    expect(() => encontrarSegundoMaiorNumero(numeros)).toThrow('Não há segundo maior número no array');
  });

  test('deve lidar corretamente com arrays com números negativos', () => {
    const numeros = [-10, -20, -4, -45, -99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(-10);
  });

  test('deve lidar corretamente com arrays com números repetidos', () => {
    const numeros = [10, 20, 20, 45, 99];
    const resultado = encontrarSegundoMaiorNumero(numeros);
    expect(resultado).toBe(45);
  });
});
