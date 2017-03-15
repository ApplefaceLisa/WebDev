# Beginner
- [Get the Middle Character](https://www.codewars.com/kata/get-the-middle-character/javascript)

  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  Examples:
  ```
  Kata.getMiddle("test") should return "es"

  Kata.getMiddle("testing") should return "t"

  Kata.getMiddle("middle") should return "dd"

  Kata.getMiddle("A") should return "A"
  ```
  Input : A word (string) of length 0 < str < 1000
  Output : The middle character(s) of the word represented as a string.
  
  solution:
  ```Javascript
  function getMiddle(s)
  {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  }
  ```

- [Binary Addition](https://www.codewars.com/kata/binary-addition/javascript)
 
  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
  The binary number returned should be a string.
  solution:
  ```Javascript
  function addBinary(a,b){
    return (a+b).toString(2)
  }
  ```

- [List Filtering](https://www.codewars.com/kata/list-filtering/javascript)

  In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  Example
  ```
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
  ```
  solution:
  keep elements which are number type.
  ```Javascript
  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }
  ```

- [Persistent Bugger](https://www.codewars.com/kata/persistent-bugger/javascript)

  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example:
  ```
   persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                         // and 4 has only one digit

   persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                          // 1*2*6 = 12, and finally 1*2 = 2

   persistence(4) === 0 // because 4 is already a one-digit number
  ```
  solution:
  ```Javascript
  function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
  }
  
  const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
  }
  ```

- [Exes and Ohs](https://www.codewars.com/kata/exes-and-ohs/javascript)
  
  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

  Examples input/output:
  ```
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
  ```
  solution:
  ```Javascript
  function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }
  ```

- [Array.diff](https://www.codewars.com/kata/array-dot-diff/javascript)

  Your goal in this kata is to implement an difference function, which subtracts one list from another.
  It should remove all values from list a, which are present in list b.
  ```
  difference([1,2],[1]) == [2]
  ```
  If a value is present in b, all of its occurrences must be removed from the other:
  ```
  difference([1,2,2,2,3],[2]) == [1,3]
  ```  
  solution:  
  keep a's elements which are not in b.
  ```Javascript
  function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }
  ```

- [Your order, please](https://www.codewars.com/kata/your-order-please/javascript)

  Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
  For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
  
  solution:
  sort array by the number each element contains.
  ```Javascript
  function order(words){
    // ...
    return words.split(" ").sort(function(a,b) {
      return (a.match(/\d/) - b.match(/\d/));
    }).join(" ");
  }
  ```
  
- [Disemvowel Trolls](https://www.codewars.com/kata/disemvowel-trolls/javascript)

  Your task is to write a function that takes a string and return a new string with all vowels removed.
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  
  solution:
  replace all vowels with ""
  ```Javascript
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  ```
  
- [Sum of Numbers](https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/javascript)

  Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
  Note! a and b are not ordered!
  ```
  Example: 
  GetSum(1, 0) == 1   // 1 + 0 = 1
  GetSum(1, 2) == 3   // 1 + 2 = 3
  GetSum(0, 1) == 1   // 0 + 1 = 1
  GetSum(1, 1) == 1   // 1 Since both are same
  GetSum(-1, 0) == -1 // -1 + 0 = -1
  GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
  ```
  solution:  
  ```Javascript
  // sum of range(a,b) = (|a-b|+1)*(a+b)/2
  GetSum = (a, b) => {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
  }
  ```

- [Regex validate PIN code](https://www.codewars.com/kata/regex-validate-pin-code/javascript)

  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  If the function is passed a valid PIN string, return true, else return false.

  eg:
  ```
  validatePIN("1234") === true
  validatePIN("12345") === false
  validatePIN("a234") === false
  ```
  
  solution:
  ```Javascript
  function validatePIN (pin) {
    //return true or false
    if (pin.length != 4 && pin.length != 6) {
      return false;
    }
    return (pin.match(/\D/) == null);       // match non-number characters
  }
  
  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
  }
  ```
  
- [Shortest Word](https://www.codewars.com/kata/shortest-word/javascript)

  x Simple, given a string of words, return the **length** of the shortest word(s).
  String will never be empty and you do not need to account for different data types.

  solution:
  ```Javascript
  function findShort(s){
    return s.split(" ").reduce(function(rst,value) {
      return Math.min(rst, value.length);
    }, Number.MAX_VALUE);
  }
  
  function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }  
  ```

- [Where my anagrams at?](https://www.codewars.com/kata/where-my-anagrams-at/javascript)

  What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
  ```
  'abba' & 'baab' == true
  'abba' & 'bbaa' == true
  'abba' & 'abbba' == false
  ```
  Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
  ```
  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
  anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
  ```
  solution:
  ```Javascript
  String.prototype.sort = function() {
    return this.split("").sort().join("");
  };

  function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }
  ```

- [Maximum subarray sum](https://www.codewars.com/kata/maximum-subarray-sum/javascript)

  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
  ```
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]
  ```
  
  solution O(n) : [Kadane's algorithm](https://www.youtube.com/watch?v=86CQq3pKSUw)
  ```Javascript
  var maxSequence = function(arr){
    // ...
    if (!arr) {return 0;}
    if (arr.every(function(e) {return e < 0;})) {return 0;}
    
    // Kadane's algorithm
    var max_current = arr[0];
    var max_global = arr[0];
    for (var i = 1; i < arr.length; i++) {
      max_current = Math.max(arr[i], max_current+arr[i]);
      max_global = Math.max(max_current, max_global);    
    }
    return max_global;
  }
  
  // better one
  var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum + number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
  }
  ```
  
- [Largest 5 digit number in a series](https://www.codewars.com/kata/largest-5-digit-number-in-a-series/javascript)

  In the following 6 digit number:
  ```
  283910
  ```
  91 is the greatest sequence of 2 digits.
  Complete the solution so that it returns the largest _**five digit**_ number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
  
  solution:
  ```Javascript
  function solution(digits){
    var result = 0;
    var num = 5;
    for (var i = 0; i <= digits.length-num; i++) {
      var cur = Number(digits.substr(i, num));
      result = Math.max(result, cur);
    }
    return result;
  }
  
  // recursion
  function solution(digits){
    if (digits.length <= 5) return Number(digits);
    return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
  }
  ```
