const ceasarCipher = require('../scripts/ceasarCipher');

test('Wraps z to a', () => {
  expect(ceasarCipher('z', 4)).toBe('d');
});

test('word test', () => {
  expect(ceasarCipher('zelGranadoz', 2)).toBe('bgnItcpcfqb');
});
