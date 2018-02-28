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
- typeof : is mainly used for telling apart the different primitive types (undefined, null,  
            boolean, number, string).
- instanceof : inspects the object’s prototype chain.
- constructor : is a reference to the constructor function used to create the object.
```
typeof 3;         // returns "number"
typeof NaN;    // returns “number”
typeof 'blah';   //returns "string"
typeof true;    // returns “boolean”
typeof undefined;     // returns undefined
typeof function () {}; //returns "function"
typeof {};         //returns "object"
typeof [];         //returns "object"
typeof null;     // returns object

({}).constructor          // Object
[].constructor             // Array
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
typeof name;  // results in undefined. undefined === undefined is true
```

### 6. 
