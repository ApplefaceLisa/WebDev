# Beginner

- sort a given string

  Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
  For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

  ```Javascript
  function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }
  ```
  
- Disemvowel Trolls

  Your task is to write a function that takes a string and return a new string with all vowels removed.
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  
  ```Javascript
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  ```
  
- Sum of Numbers
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
  GetSum = (a, b) => {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
  }
  ```

- Regex validate PIN code
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
    return /^(\d{4}|\d{6})$/.test(pin)
  }
  ```
  
- Shortest Word

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
