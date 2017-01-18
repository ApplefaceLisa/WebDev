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
            for (j = i * i; j <= max; j += i) {
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

## Sieve of Eratosthenes Algorithm
**__Example:__**

*To find all the prime numbers less than or equal to 30, proceed as follows.*

- First generate a list of integers from 2 to 30:

  2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30.

- The first number in the list is **2**; cross out every 2nd number in the list after 2 by counting up from 2 in **increments of 2** (these will be all the multiples of 2 in the list):

  2 3 ~~4~~ 5 ~~6~~ 7 ~~8~~ 9 ~~10~~ 11 ~~12~~ 13 ~~14~~ 15 ~~16~~ 17 ~~18~~ 19 ~~20~~ 21 ~~22~~ 23 ~~24~~ 25 ~~26~~ 27 ~~28~~ 29 ~~30~~.

- The next number in the list after 2 is **3**; cross out every 3rd number in the list after 3 by counting up from 3 in **increments of 3** (these will be all the multiples of 3 in the list):

  2 3 ~~4~~ 5 ~~6~~ 7 ~~8 9 10~~ 11 ~~12~~ 13 ~~14 15 16~~ 17 ~~18~~ 19 ~~20 21 22~~ 23 ~~24~~ 25 ~~26 27 28~~ 29 ~~30~~.

- The next number not yet crossed out in the list after 3 is **5**; cross out every 5th number in the list after 5 by counting up from 5 in **increments of 5** (i.e. all the multiples of 5):

  2 3 ~~4~~ 5 ~~6~~ 7 ~~8 9 10~~ 11 ~~12~~ 13 ~~14 15 16~~ 17 ~~18~~ 19 ~~20 21 22~~ 23 ~~24 25 26 27 28~~ 29 ~~30~~.

- The next number not yet crossed out in the list after 5 is **7**; the next step would be to cross out every 7th number in the list after 7, but they all have been crossed out at this point, as these numbers (14, 21, 28) are also multiples of smaller primes because 7 × 7 is greater than 30. The numbers not crossed out in the list at this point are all the prime numbers below 30:

  2 3 5 7 11 13 17 19 23 29.

### Pseudocode
```
Input: an integer n > 1
 
Let A be an array of Boolean values, indexed by integers 2 to n,
initially all set to true.
 
for i = 2, 3, 4, ..., not exceeding √n:
  if A[i] is true:
    for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n :
      A[j] := false
 
Output: all i such that A[i] is true.
```
