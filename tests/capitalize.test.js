const capitalize = require('../scripts/capitalize');

test('capitalize', () => {
  expect(capitalize('zel')).toBe('Zel');
});

test('capitalize2', () => {
  expect(capitalize('odinProject')).toBe('OdinProject');
});
