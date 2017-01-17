# JavaScript

## spread operator (...)
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
  - The spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.
    - example
       - var parts = ['shoulders', 'knees'];
       - var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
        
    - using spread operator in Math.max()
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
      - example
        - var arr = [1, 4, 3, 2, 5];
        - var max = Math.max(...arr);    // max = 5

## Arguments object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
- The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length.
- it can be converted to a real Array:
  - var args = Array.prototype.slice.call(arguments);
  - var args = [].slice.call(arguments);
  - var args = Array.from(arguments);
  - var args = [...arguments];

## Array methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

  - Array.prototype.filter()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    - var new_array = arr.filter(callback[, thisArg])
      - thisArg : Optional. Value to use as this when executing callback.
      
  - Array.prototype.indexOf()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    - Syntax
      - arr.indexOf(searchElement)
      - arr.indexOf(searchElement, fromIndex)
      
  - Array.prototype.concat()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    - var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
    
  - Array.prototype.map()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    - creates a new array with the results of calling a provided function on every element in this array.
    - Syntax : var new_array = arr.map(callback[, thisArg])
    
  - Array.from()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    - creates a new Array instance from an array-like or iterable object.
    - Syntax : Array.from(arrayLike[, mapFn[, thisArg]])
    - example
      - var num = 36;
      - var arr = Array.from(num.toString());    // arr = ['3','6']
    
## Object methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  - Object.prototype.hasOwnProperty()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    - The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
    - Syntax : obj.hasOwnProperty(prop)
    - example
      - var buz = {
      -   fog: 'stack'
      - };
      - buz.hasOwnProperty('fog');  // return true
      
  - Object.keys()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    - returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop.
    - Syntax: Object.keys(obj)
    - example
      - var buz = {
      -   fog: 'stack'
      - };
      - Object.keys(buz);    // return ['fog']
 
## String Methods
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 
## Set object
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- The Set object lets you store unique values of any type, whether primitive values or object references.
- Syntax : new Set([iterable]);
    
# Algorithm

### Roman Numeral Converter
  - http://stackoverflow.com/questions/12967896/converting-integers-to-roman-numerals-java
  - https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Roman-Numeral-Converter


# Challenge Guide
- https://forum.freecodecamp.com/c/wiki
- https://github.com/freeCodeCamp/freeCodeCamp/wiki
