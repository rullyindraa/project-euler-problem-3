# Project Euler Problem #3

[![CircleCI](https://circleci.com/gh/rullyindraa/project-euler-problem-3/tree/master.svg?style=shield)](https://circleci.com/gh/rullyindraa/project-euler-problem-3/tree/master)

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

<https://projecteuler.net/problem=3>

# Testing
1. Install `jest` and `jest-each` into project directory with this command:
```
npm install --save-dev jest

npm i --save-dev jest-each
```

2. Make new directory named test, then add file solution.test.js
```
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
```
largestPrime is function name and '..src/solution' is name file to be tested.

3. Edit file package.json:
```
"test" = "jest"
```

4. Test the program with this command
```
npm run test
```

then the picture will appear as follows

![Images](https://github.com/rullyindraa/project-euler-problem-3/blob/master/test/test-jest-each.png)
