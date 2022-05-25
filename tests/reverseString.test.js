const reverseString = require('../scripts/reverseString');

test('first test reverse a string', () => {
  expect(reverseString('odinproject')).toBe('tcejorpnido');
});

test('second test reverse string', () => {
  expect(reverseString('denzel')).toBe('lezned');
});
