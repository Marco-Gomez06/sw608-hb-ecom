const money = require('../../src/shared/helpers/money');
const truncate = require('../../src/shared/helpers/truncate');

test('money formatea PEN y USD', () => {
  expect(money(10, 'PEN')).toBe('S/ 10.00');
  expect(money(10, 'USD')).toBe('$ 10.00');
});
test('truncate corta con elipsis', () => {
  expect(truncate('abcdefghij', 5)).toBe('abcde…');
});
