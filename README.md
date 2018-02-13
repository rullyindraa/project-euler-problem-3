# Project Euler Problem #3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

<https://projecteuler.net/problem=3>

# Cara Testing Program
1. Install jest dengan cara masuk ke direktori project lalu mengetikkan perintah:
```
npm install --save-dev jest
```

2. Buat direktori test, lalu tambahkan file namafile.test.js
```
const largestPrime = require('../src/solution');
test('faktor bilangan prima terbesar dari 600851475143 adalah', () => {
  expect(largestPrime(600851475143)).toBe(6857);
})
```
keterangan: largestPrime adalah nama fungsi javascript dan '..src/solution' adalah nama file yang akan di test.

3. Edit file package.json:
```
"test" = "jest"
```

4. Lalu testing dengan cara:
```
npm run test
```
maka akan muncul gambar seperti berikut:
![Images](https://github.com/rullyindraa/project-euler-problem-3/blob/master/test/Screen%20Shot%20Test.png)
