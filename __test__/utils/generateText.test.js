const { generateCleanText, generateLieDownText } = require('../../lib/utils/generateText');

describe('generateCleanText', () => {

  describe.each`
  input        | expected
  ${''}  | ${''}
  ${null}  | ${''}
  ${'hoge'}  | ${'hoge'}
  ${'hoge<hugapiyo'}  | ${'hogehugapiyo'}
  ${'hogehuga>piyo'}  | ${'hogehugapiyo'}
  ${'hoge<huga>piyo'}  | ${'hogehugapiyo'}
  ${'hoge<huga><piyo>'}  | ${'hogehugapiyo'}

`('generateCleanText', ({ input, expected }) => {
    test(`returns ${expected}`, () => {
      const result = generateCleanText(input);
      expect(result).toBe(expected);
    });
  });
});

describe('generateLieDownText', () => {

  describe.each`
  input        | expected
  ${''}  | ${''}
  ${null}  | ${''}
  ${'hoge'}  | ${'hoge'}
  ${'hoge<hugapiyo'}  | ${'hoge<hugapiyo'}
  ${'hogehuga>piyo'}  | ${'hogehuga>piyo'}
  ${'hoge<huga>piyo'}  | ${'hoge○○○○piyo'}
  ${'hoge<huga><piyo>'}  | ${'hoge○○○○○○○○'}

`('generateLieDownText', ({ input, expected }) => {
    test(`returns ${expected}`, () => {
      const result = generateLieDownText(input);
      expect(result).toBe(expected);
    });
  });
});
