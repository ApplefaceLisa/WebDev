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

Answer: D

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

3. array.reduce && Math.pow
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

4. 
