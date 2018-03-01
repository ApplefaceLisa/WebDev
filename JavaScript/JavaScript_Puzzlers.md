# JavaScript Puzzlers
thanks for : http://javascript-puzzlers.herokuapp.com/

### 1. array.map && parseInt
```
What is the result of this expression? (or multiple ones)
          
["1", "2", "3"].map(parseInt)
        
A. ["1", "2", "3"]
B. [1, 2, 3]
C. [0, 1, 2]
D. other
```

Answer: D, what you actually get is [1, NaN, NaN]

Reason: 
- [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) : `array.map(callback(curVal [, index [, array]])`
- [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) : `parseInt(string, radix)`
```
["1", "2", "3"].map(parseInt)  =>  
[parseInt("1", 0)   => 1
 parseInt("2", 1)   => NaN
 parseInt("3", 2)   => NaN
]
```

### 2. [typeof vs. instanceof vs. constructor](http://skilldrick.co.uk/2011/09/understanding-typeof-instanceof-and-constructor-in-javascript/)
```
What is the result of this expression? (or multiple ones)
          
[typeof null, null instanceof Object]
        
A. ["object", false]
B. [null, false]
C. ["object", true]
D. other
```

Answer : A

Reason : typeof will always return "object" for native non callable objects.
- typeof : typeof is a unary operator, it returns a string representing the type of its operand. It is mainly used for telling apart the different primitive types (undefined, null, boolean, number, string).
- instanceof : inspects the object’s prototype chain.
- constructor : is a reference to the constructor function used to create the object.
```
typeof 3;         // returns "number"
typeof NaN;       // returns “number”
typeof 'blah';    //returns "string"
typeof true;      // returns “boolean”
typeof undefined; // returns undefined
typeof function () {}; //returns "function"
typeof {};         //returns "object"
typeof [];         //returns "object"
typeof null;       // returns object

({}).constructor   // Object
[].constructor     // Array
```

### 3. array.reduce && Math.pow
```
What is the result of this expression? (or multiple ones)
          
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
        
A. an error
B. [9, 0]
C. [9, NaN]
D. [9, undefined]
```
Answer : A

Reason : reduce on an empty array without an initial value throws TypeError.
`[3,2,1].reduce(Math.pow) => 9, [].reduce(Math.pow) results TypeError`
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) : 
`arr.reduce(callback(acc, curVal, curIndex, arr) [, initialValue])`. If no initialValue applied, first acc equals to arr[0], first curVal equals to arr[1]. And result becomes to next acc, and so on. If initialValue applied, first acc equals to initialValue, first curVal equals to arr[0].
- [Math.pow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) : `Math.pow(base, exponent)`

### 4. [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
```
What is the result of this expression? (or multiple ones)
          
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
        
A. Value is Something
B. Value is Nothing
C. NaN
D. other
```
Answer : D, it actually prints 'Something'.

Reason : the '+' operator has higher precedence than the ternary one.

### 5. hoisting
```
What is the result of this expression? (or multiple ones)
          
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
        
A. Goodbye Jack
B. Hello Jack
C. Hello undefined
D. Hello World
```
Answer : A

Reason : The var declaration is hoisted to the function scope, but the initialization is not. The original code equals to:
```
var name = 'World!';
(function () {
    var name;
    if (typeof name === 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
and
var name;
typeof name;  // results in 'undefined'. typeof returns string.
```

### 6. JavaScript max value [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
```
What is the result of this expression? (or multiple ones)
          
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
        
A. 0
B. 100
C. 101
D. other
```
Answer : D, it goes into an infinite loop

Reason : JavaScript can only safely represent numbers between -(2^53 - 1) and 2^53 - 1. And 2^53 == 2^53+1 == 2^53+2...
Number.MAX_SAFE_INTEGER = 2^53-1; Number.MIN_SAFE_INTEGER = -(2^53 - 1).

[Whats the difference between JS Number.MAX_SAFE_INTEGER and MAX_VALUE?](https://stackoverflow.com/questions/34799226/whats-the-difference-between-js-number-max-safe-integer-and-max-value)

### 7. [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```
What is the result of this expression? (or multiple ones)
          
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
        
A. [undefined × 7]
B. [0, 1, 2, 10]
C. []
D. [undefined]
```
Answer : C

Reason : Array.prototype.filter callback is not invoked for the missing elements.

`var newArray = arr.filter(callback(element, index, arr) [, thisArg])`
- filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that _coerces to true_. 
- callback is invoked only for indexes of the array which have assigned values; _**it is not invoked for indexes which have been deleted or which have never been assigned values**_.

### 8. JS floating point number (IEEE 754 double precision floating)
```
What is the result of this expression? (or multiple ones)
          
var two   = 0.2
var one   = 0.1
var eight = 0.8
var six   = 0.6
[two - one == one, eight - six == two]
        
A. [true, true]
B. [false, false]
C. [true, false]
D. other
```
Answer : C

Reason : JavaScript does not have precision math, even though sometimes it works correctly.

### 9. switch-case
```
What is the result of this expression? (or multiple ones)
          
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
        
A. Case A
B. Case B
C. Do not know!
D. undefined
```
Answer : C

Reason : switch uses `===` internally and new String(x) !== x
