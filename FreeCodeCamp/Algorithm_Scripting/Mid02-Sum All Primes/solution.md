# Algorithm Sum All Primes

## Problem Explanation:
The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter. Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers.

- Sieve of Eratosthenes Algorithm
  - https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  
- Code
  - http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
  
## Solution
```JavaScript
function sumPrimes(num) {
  /* generate primes up to max value */
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

/* testcase */
sumPrimes(10);
```
