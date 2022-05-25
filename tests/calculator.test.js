import { add, sub, mul, div } from '../scripts/calculator';

test('test for addition', () => {
  expect(add(4, 6)).toBe(10);
});

test('test for subtraction', () => {
  expect(sub(6, 5)).toBe(1);
});

test('test for multiplication', () => {
  expect(mul(2, 3)).toBe(6);
});

test('test for division', () => {
  expect(div(20, 5)).toBe(4);
});
