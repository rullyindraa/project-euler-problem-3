const largestPrime = require('../src/solution');
test('faktor bilangan prima terbesar dari 600851475143 adalah', () => {
  expect(largestPrime(600851475143)).toBe(6857);
})
