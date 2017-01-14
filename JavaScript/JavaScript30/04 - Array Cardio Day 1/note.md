# This is an array workout!
- JavaScript Array
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## JavaScript array methods

- Array.prototype.filter()      
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  - filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. 
    - var new_array = arr.filter(callback[, thisArg])

- Array.prototype.map()
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - The map() method creates a new array with the results of calling a provided function on every element in this array.
    - var new_array = arr.map(callback[, thisArg])


- Array.prototype.sort()
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  - The sort() method sorts the elements of an array in place and returns the array.
    - arr.sort()
    If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. 
    
    - arr.sort(compareFunction)
    If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. 
      - If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
      - If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
      - If compareFunction(a, b) is greater than 0, sort b to a lower index than a.

- Array.prototype.reduce()
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  - The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
    - arr.reduce(callback, [initialValue])


### Articles
- map() vs. forEach() vs. for()
  - https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html
  
- JavaScript ES6+: var, let, or const?
  - https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.mx92zgntl
