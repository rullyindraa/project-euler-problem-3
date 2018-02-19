const each= require('jest-each');

const largestPrime = require('../src/solution');

describe('.largestPrime()', () => {
  each([
    [600851475143, 6857],
    [13195, 29],
    [49, 7],
  ]).test('make sure the output is correct for the given sample', (a, expected) => {
      expect(largestPrime(a)).toBe(expected);
    });
});
