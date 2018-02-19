function largestPrime(a) {
  var factor = 2;
    while (a != factor) {
      if (a % factor === 0) {
        a = a / factor; 
      } else {
        factor++;
      }
    }
    return factor;
}

module.exports=largestPrime;
