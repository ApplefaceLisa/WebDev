function sumPrimes(num) {
  /* generate a list of prime numbers up to max */
  function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
  }
  
  /* sum up primes */
  var primes = getPrimes(num);    
  return primes.reduce((a,b) => (a+b));
}
