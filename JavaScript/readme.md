# About learning JavaScript

# Book
#### [You Don't Know JS series](https://github.com/getify/You-Dont-Know-JS)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)
  
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
  
- [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar)
  
- [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance)
  
- [You Don't Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)

#### JavaScript. The Definitive Guide, David Flanagan

#### [Eloquent JavaScript](http://eloquentjavascript.net/index.html)

# Video
- [Douglas Crockford: The JavaScript Programming Language](https://www.youtube.com/watch?v=v2ifWcnQs6M)
- [Douglas Crockford: Advanced JavaScript](https://www.youtube.com/watch?v=DwYPG6vreJg)
- [Douglas Crockford: An Inconvenient API - The Theory of the DOM](https://www.youtube.com/watch?v=Y2Y0U-2qJMs)
- and more...

# Cheat sheet
- [JavaScript cheat sheet](http://overapi.com/javascript)
- [JavaScript Reference Cheat Sheet](https://codepen.io/davidicus/details/trhme)

# Tools
- [JSLint](http://www.jslint.com/)
- [Can I Use](http://caniuse.com)
- [cordova](https://cordova.apache.org/)   hybrid apps
- Google map api
- [Sencha Ext JS](https://www.sencha.com/products/extjs/#overview)

# JS library
### Particles.js
- [particles.js](https://github.com/VincentGarreau/particles.js/)
- [An Introduction to Particles.js](https://code.tutsplus.com/series/an-introduction-to-particlesjs--cms-1017)
- [particleground](https://github.com/jnicol/particleground)

# Cool stuff
- [Building a 3D Rotating Carousel with CSS and JavaScript](https://www.sitepoint.com/building-3d-rotating-carousel-css-javascript/)

# Articles
- [3 JavaScript questions to watch out for during coding interviews](https://medium.freecodecamp.com/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb#.mfc6xdg3d)

  - Question #1: Event delegation
  - Question #2: Using a closure within a loop
  - Question #3: Debouncing
  
- [JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)

- [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
- [JavaScript Best Practices: Tips & Tricks to Level Up Your Code](https://www.codementor.io/johnnyb/javascript-best-practices-du107mvud)
    
# Basic Knowledge
## [Javascript Data Types and Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
- Javascript Data Types

  Six data types that are primitives:
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol (new in ECMAScript 6)
  
  and Object
  
- Type Conversion
  - Number() : converts to a Number. The _**unary +**_ operator can be used to convert a variable to a number (e.g. var x = +y).
    - Strings to Numbers
      - Strings containing ONLY numbers (like "3.14") convert to numbers (like 3.14).
      - Empty strings convert to 0, i.e. `Number("") -> 0`.
      - Anything else converts to NaN (Not a number), example "99 99".      
    - Booleans to Numbers
      - `Number(false) -> 0`
      - `Number(true) -> 1`
    - Array to Numbers
      - Empty arrays convert to 0, i.e. `Number([]) -> 0`.
      - `Number([20]) -> 20`, `Number([20, 30]) -> NaN`
    - Others
      - `Number(null) -> 0`
      - `Number(Infinity) -> Infinity`, `Number(-Infinity) -> -Infinity`
      - `Number(undefined) -> NaN`
      - `Number(NaN) -> NaN`
      - others (function, objects) are all converted to NaN
    
  - String() : converts to a String
    - Empty array will be converted to empty string, i.e. `String([]) -> ""`
    - All others will be converted to string type of itself, e.g. `String(null) -> "null"`
  
  - Boolean() : converts to a Boolean
    - falsy : 0 (Number), "" (empty string), null, undefined, NaN, false are converted to false.
    - all other are true.
    

## Variable scope and hoisting
- [Demystifying JavaScript Variable Scope and Hoisting](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
- scope problem of setInterval() / setTimeout()
  - [Referencing “this” inside setInterval/setTimeout within object prototype methods
](http://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods)

## Functions
- function declaration vs. function expression
  they are two ways of defining equivalent functions.
  ```javascript
  // function declaration
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // function expression
  var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  ```

- Understanding _arguments_ Object

- Understanding _this_ object

- Function Binding (call / apply / bind)
  - [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  
    _**func.call(thisObj[, arg1[, arg2[, ...]]])**_
    
    return the result of calling the function with the specified _this_ value and arguments.
    
    
  - [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  
    The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
  
    _**func.apply(thisObj[, arg_arr])**_
    
    **the arguments are passed to the function are specified as an array** : arg_arr = [arg1[, arg2[, ...]]].
    
    return the result of calling the function with the specified _this_ value and arguments.
    
  - [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  
    _**func.bind(thisObj[, arg1[, arg2[, ...]]])**_
    
    return a copy of the given function with the specified _this_ value and initial arguments.
    
    The bind() function creates a **new bound function (BF)**. It creates a new function instance whose _this_ value is bound to the value that was passed into bind().
  
  - **compare**
  
    Use **.bind()** when you want that function to **later be called** with a certain context, useful in events. Use **.call() or .apply()** when you want to invoke the funciton **immediately**, and modify the context.

    Call/apply call the function immediately, whereas bind returns a function that when later executed will have the correct context set for calling the original function. This way you can maintain context in async callbacks, and events.
  
    for [example](http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
    ```javascript
    function MyObject(element) {
      this.elm = element;

      element.addEventListener('click', this.onClick.bind(this), false);
    };

    MyObject.prototype.onClick = function(e) {
         var t=this;  //do something with [t]...
        //without bind the context of this function wouldn't be a MyObject
        //instance as you would normally expect.
    };
    ```

- Closure

  A closure is simply an outer function that returns an inner function. Doing this creates a mechanism to return an enclosed scope on demand.
  
  Closures have access to the outer function’s variable even after the outer function returns.
  
  Closures store references to the outer function’s variables; they do not store the actual value.

- use function to implement module
  ```javascript
      function moduleA() {
          var secretValue = 21;
          return {
              getSecretValue : function () {
                  return secretValue;
              },
              setSecretValue : function (val) {
                  secretValue = val;
              }
          }
      }

      var someObj = moduleA();
      console.log(someObj.getSecretValue());
      someObj.setSecretValue(43);
      console.log(someObj.getSecretValue());
  ```
  
- What are the advantages of IIFEs(Immediately Invoked Function Expressions)?
  - [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
  - [Quora Answer](https://www.quora.com/What-are-the-advantages-of-using-an-immediately-invoked-function-expression)
    - Module pattern can  be implemented with the help of IIFE.
    - One of the most common ways in which immediate functions are used: as simple, self-contained wrappers for functionality. The variables needed for the unit of functionality are trapped in the closure, but they aren’t visible anywhere else.
    - Enforcing the use of a name within an enclosed scope. 
    - Keeping code readable with shorter names.
    - Using an immediate function to handle the iterator properly.

- [Demystifying JavaScript Closures, Callbacks and IIFEs](https://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/)
  - In Javascript, a **closure** is any function that keeps **_reference_** to variables from its _parent’s scope even after the parent has returned_. Closures keep references to outer variables, and thus, they _return the most recent/updated values_.
  
    So, what do you think is going to be the output of the following example?
    ```javascript
    function printFruits(fruits){
      for (var i = 0; i &lt; fruits.length; i++) {
        setTimeout( function(){
          console.log( fruits[i] );
        }, i * 1000 );
      }
    }

    printFruits(["Lemon", "Orange", "Mango", "Banana"]);
    ```
    
    the output is four times “undefined”.
    
    How to fix it? (See IIFE).
  
  - In JavaScript, functions are first-class objects. One of the consequences of this fact is that functions can be passed as arguments to other functions and can also be returned by other functions.
  
    A function that takes other functions as arguments or returns functions as its result is called a _higher-order function_, and the function that is passed as an argument is called a **callback function**. It’s named “callback” because at some point in time it is “called back” by the higher-order function.
    
    Callbacks are heavily used in JavaScript libraries to provide generalization and reusability. They allow the library methods to be easily customized and/or extended. Also, the code is easier to maintain, and much more concise and readable. Every time you need to transform your unnecessary repeated code pattern into more abstract/generic function, callbacks come to the rescue.
    
    Put the repeated code pattern into _higher-order function_,  and leave only the specific data inside _callback functions_.
    
    Example:    
    - setTimeout() and setInterval()
    ```javascript
    function showMessage(message){
      setTimeout(function(){
        alert(message);
      }, 3000);  
    }

    showMessage('Function called 3 seconds ago');
    ```
    - Another example is when we attach an event listener to an element on a page.
    ```html
    <button id='btn'>Click me</button>
    ```
    ```javascript
    function showMessage(){
      alert('Woohoo!');
    }

    var el = document.getElementById("btn");
    el.addEventListener("click", showMessage);
    ```
    
    The callback can be an existing function as shown in the preceding example, or it can be an anonymous function, which we create when we call the higher-order function.
    ```javascript
    function fullName(firstName, lastName, callback){
      console.log("My name is " + firstName + " " + lastName);
      callback(lastName);
    }

    fullName("Jackie", "Chan", function(ln){console.log('Welcome Mr. ' + ln);});
    ```
    
  - An Immediately-invoked function expression, or **IIFE** (pronounced “iffy”), is a function expression (named or anonymous) that is executed right away after its creation.
  
    An IIFE is often used to create scope to encapsulate modules. Within the module there is a private scope that is self-contained and safe from unwanted or accidental modification. This technique, called the module pattern, is a powerful example of using closures to manage scope, and it’s heavily used in many of the modern JavaScript libraries (jQuery and Underscore, for example).
  
    There are two slightly different syntax variations of this pattern:
    ```javascript
    // variant 1

    (function () {
      alert('Woohoo!');
    })();

    // variant 2

    (function () {
      alert('Woohoo!');
    }());
    ```
    
    The problem of closure can be fixed by closing the setTimeout() method in an IIFE, and defining a private variable to hold the current copy of i.    
    ```javascript
    function printFruits(fruits){
      for (var i = 0; i < fruits.length; i++) {
        (function(){
          var current = i;                    // define new variable that will hold the current value of "i"
          setTimeout( function(){
            console.log( fruits[current] );   // this time the value of "current" will be different for each iteration
          }, current * 1000 );
        })();
      }
    }

    printFruits(["Lemon", "Orange", "Mango", "Banana"]);
    ```
    Or
    ```javascript
    function printFruits(fruits){
      for (var i = 0; i < fruits.length; i++) {
        (function(current){
          setTimeout( function(){
            console.log( fruits[current] );
          }, current * 1000 );
        })( i );
      }
    }

    printFruits(["Lemon", "Orange", "Mango", "Banana"]);
    ```

- Factory Functions vs Constructor Functions vs Classes
  - [JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e#.893p2krj8)
   
- Event Loop
  - [MDN Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
  - [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  

## Objects
### User Defined Objects
- [JavaScript Object Creation: Patterns and Best Practices](https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/)
  - Object Literals, example : an object with methods and data.
    ```
    var o = {
      x: 42,
      y: 3.14,
      f: function() {},
      g: function() {}
    };
    ```
    _**Drawback**_ : 

    If we need to create the same type of object in other places, then we’ll end up copy-pasting the object’s methods, data, and initialization. We need a way to create not just the one object, but a family of objects.
    
  - Factory Functions, example : 
    ```
    function thing() {
      return {
        x: 42,
        y: 3.14,
        f: function() {},
        g: function() {}
      };
    }     // return an object literal from a function

    var obj1 = thing();
    var obj2 = thing();    // create the same type of object multiple times or in multiple places
    ```
    
    _**Drawback**_ : 

    This approach can cause memory bloat because each object contains its own unique copy of each function. Ideally we want every object to share just one copy of its functions.
      
  - Prototype Chains
  
    JavaScript gives us a built-in mechanism to share data across objects, called the prototype chain.
    
    Example:
    ```
      thing.prototype.f = function() {};
      thing.prototype.g = function() {};

      function thing() {
        var o = Object.create(thing.prototype);

        o.x = 42;
        o.y = 3.14;

        return o;
      }

      var o = thing();    
    ```
    _**Drawback**_ : The first and last lines of the “thing” function are going to be repeated almost verbatim in every such delegating-to-prototype-factory-function.
    
  - ES5 Classes : isolate the repetitive lines by moving them into their own function. Example:
    ```
      Thing.prototype.f = function() {};
      Thing.prototype.g = function() {};  // delegate shared data to a prototype object

      function Thing() {
        this.x = 42;
        this.y = 3.14;
      }

      var o = new Thing();  // rely on the “new” keyword to handle repetitive logic
    ```
    
    _**Drawback**_ : verbose and ugly
    
  - ES6 Classes : example
    ```
      class Thing {
        constructor() {
          this.x = 42;
          this.y = 3.14;
        }

        f() {}
        g() {}
      }

      var o = new Thing();    
    ```    
  
- [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)

- [object literal notation vs constructor](http://stackoverflow.com/questions/4859800/should-i-be-using-object-literals-or-constructor-functions)
  - If you **don't have behaviour** associated with an object (i.e. if the object is just a container for data/state), use an object literal. Furthermore, Object literals are basically singletons with variables/methods that are all public.
    ```javascript
    var data = {
        foo: 42,
        bar: 43
    };
    data.foo = 12;
    data.bar = 99;
    ```
  - Object defined with a constructor lets you have multiple instances of that object. If you want to use **(semi-)private variables or functions** in you object, a constructor function is the way to do it.
    ```javascript
    function MyData(foo, bar) {
        var _foo = foo;   // private
        this.bar = bar;   // public

        this.verify = function () {
            return _foo === this.bar;   // _foo doesn't need this
        };
    }
    ```
  - Prototype lets you attach each function once and only once: they'll be inherited by the instances through prototypal inheritance.
    ```javascript
    MyData.prototype.verify = function () {
        return this.foo === this.bar;
    };
    ```
  
- Basic class, subclass and inheritance
  - MDN [Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
    **Prototypal Inheritance**
  
- Quora [Object vs Class vs Function](http://stackoverflow.com/questions/17525450/object-vs-class-vs-function)
  - prototypal pattern vs. constructor pattern

- Quora [Benefits of prototypal inheritance over classical?](http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
  - Quora [Understanding the difference between Object.create() and new SomeFunction()](http://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction)
  - [Why Prototypal Inheritance Matters](http://aaditmshah.github.io/why-prototypal-inheritance-matters/#constructors_vs_prototypes)

### Core Objects
#### Array Object
- Array methods

  Method | What It Does | Syntax
  ------ | ------------ | ---------------------------------------------------
  [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | Concatenates elements from one array to another array. | `var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])`
  [copyWithin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | shallow copies part of an array (start/end) to another location (target) in the same array and returns it, without modifying its size. | `arr.copyWithin(target[, start[, end]])`, return the modified array
  [fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | fills all the elements of an array from a start index to an end index with a static value | `arr.fill(value[, start[, end]])`, return the modified array.
  [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | Removes and returns the last element of an array | `var poped_element = arr.pop()`, return _**undefined**_ if the array is empty.
  [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | Adds one or more elements to the end of an array | `var new_arr_len = arr.push([element1[, ...[, elementN]]])`
  [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | Removes and returns the first element of an array | `var shifted_element = arr.shift()`, return _**undefined**_ if the array is empty.
  [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | Adds one or more elements to the beginning of an array | `var new_arr_len = arr.unshift([element1[, ...[, elementN]]])`
  [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | Joins the elements of an array by a separator to form a string | `var new_string = arr.join([separator])`
  [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified | `var new_array = arr.slice([begin[, end]])`, end is exclusive
  [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | changes the contents of an array by removing existing elements and/or adding new elements, return an array containing the deleted elements. | `var arr = array.splice(start[, deleteCount[, item1, item2, ...]])`
  [every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | tests whether all elements in the array pass the test implemented by the provided function | `var res_boolean = arr.every(callback[, thisArg])`
  [some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | tests whether at least one element in the array passes the test implemented by the provided function | `var res_boolean = arr.some(callback[, thisArg])` 
  [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | creates a new array with all elements that pass the test implemented by the provided function | `var new_array = arr.filter(callback[, thisArg])`
  [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | executes a provided function once for each array element | `arr.forEach(function callback(currentValue, index, array) { //your iterator }[, thisArg]);`, return undefined
  [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | creates a new array with the results of calling a provided function on every element in the calling array | `var new_array = arr.map(function callback(currentValue, index, array) {  // Return element for new_array  }[, thisArg])`
  [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) | applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value | `var result = arr.reduce(callback[, initialValue])`
  [reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) | applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value | `var result = arr.reduceRight(callback[, initialValue])`
  [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | returns the _**value**_ of the first element in the array that satisfies the provided testing function. Otherwise _**undefined**_ is returned | `var element = arr.find(callback[, thisArg])`
  [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | returns the _**index**_ of the _**first**_ element in the array that satisfies the provided _**testing function**_. Otherwise _**-1**_ is returned | `var first_index = arr.findIndex(callback[, thisArg])`
  [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | returns the _**first index**_ at which a _**given element**_ can be found in the array, or _**-1**_ if it is not present | `var first_index = arr.indexOf(searchElement[, fromIndex])`
  [lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | returns the _**last index**_ at which a _**given element**_ can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex | `var last_index = arr.lastIndexOf(searchElement[, fromIndex])`
  [includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | determines whether an array includes a certain element, returning true or false as appropriate | `var res_boolean = arr.includes(searchElement[, fromIndex])`
  [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | Sorts an array _**in place**_ and no copy is made. By default, sorts values as strings. return the sorted array. | `[var arr = ]arr.sort([compareFunction])`
  [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) | reverses an array _**in place**_. The first array element becomes the last, and the last array element becomes the first. Return reversed array. | `[var reversed_arr = ]arr.reverse()`
  [entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries) | returns a new Array Iterator object that contains the key/value pairs for each index in the array | `var arr_iterator = arr.entries()`
  [keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) | returns a new Array Iterator object that contains the keys for each index in the array | `var arr_iterator = arr.keys()`
  [values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values) | returns a new Array Iterator object that contains the values for each index in the array | `var arr_iterator = arr.values()`
  [toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) | Returns a string representation of the array in local format. | `var str = arr.toLocaleString([locales[, options]]);`
  [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) | returns a string representing the specified array and its elements. | `var str = arr.toString()`

#### Date Object
- methods
  - [methods list](https://www.tutorialspoint.com/javascript/javascript_date_object.htm)
  - [methods detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### Math Object
- properties

Property | Value | Description
-------- | ----- | -----------------------------------------------------------------------
Math.E | 2.718281828459045091 | Euler’s constant, the base of natural logarithms
Math.LN2 | 0.6931471805599452862 | Natural log of 2
Math.LN10 | 2.302585092994045901 | Natural log of 10
Math.LOG2E | 1.442695040888963387 | Log base-2 of E
Math.Log10E | 0.4342944819032518167 | Log base-10 of E
Math.PI | 3.14592653589793116 | Pi, ratio of the circumference of a circle to its diameter
Math.SQRT1_2 | 0.7071067811865475727 | 1 divided by the square root of 2
Math.SQRT2 | 1.414213562373985145 | Square root of 2


- methods (mostly used)

Method | Functionality
------ | ------------------------------------------------------------------
Math.abs(Number) | Returns the absolute (unsigned) value of Number
Math.ceil(Number) | Rounds Number up to the next closest integer
Math.floor(Number) Rounds | Number down to the next closest integer
Math.max(Number1, Number2) | Returns larger value of Number1 and Number2
Math.min(Number1, Number2) | Returns smaller value of Number1 and Number2
Math.random() | Generates pseudorandom number between 0.0 and 1.0
Math.round(Number) | Rounds Number to the closest integer
Math.toString(Number) | Converts Number to string

### Wrapper Objects
#### [String Object](https://www.w3schools.com/jsref/jsref_obj_string.asp)
- properties

Property | What It Does
-------- | ------------------------------------------------------------------------
length | Returns the length of the string in characters.
constructor | Returns the function that created the String object.
prototype | Extends the definition of the string by adding properties and methods.

- HTML methods

Method | Formats as HTML
------ | -----------------------------------------
String.anchor(Name) | ```<a name="Name">String</a>```
String.big() | ```<big>String</big>```
String.blink() | ```<blink>String</blink>```
String.bold() | ```<b>String</b>```
String.fixed() | ```<tt>String</tt>```
String.fontcolor(color) | ```<font color="color">String</font> e.g., <font color="blue">String</font>```
String.fontsize(size) | ```<font size="size">String</font> e.g., <font size="+2">String</font>```
String.italics() | ```<i>String</i>```
String.link(URL) | ```<a href="URL">String</a> e.g., <a href="http://www.ellieq.com">String</a>```
String.small() | ```<small>String</small>```
String.strike() | ```<strike>String</strike> (puts a line through the text)```
String.sub() | ```<sub>String</sub> (creates a subscript)```
String.sup() | ```<sup>String</sup> (creates a superscript)```

- methods for manipulation

Method | What It Does
------ | -------------------------------------------------------------------------------
charAt(index) | Returns the character at a specified index position.
charCodeAt(index) | Returns the Unicode encoding of the character at a specified index position.
**concat(string1, ..., stringn)** | Concatenates string arguments to the string on which the method was invoked.
fromCharCode(codes) | Creates a string from a comma-separated sequence of character codes.
**indexOf(substr, startpos)** | Searches for the **first occurrence** of substr starting at startpos and returns the startpos(index value) of substr.
**lastIndexOf(substr, startpos)** | Searches for the **last occurrence** of substr starting at startpos and returns the startpos (index value) of substr.
replace(searchValue, replaceValue) | Replaces searchValue with replaceValue.
search(regexp) | Searches for the regular expression and returns the index of where it was found.
**slice(startpos[, endpos])** | Returns string containing the part of the string from startpos to endpos.
**split(delimiter)** | Splits a string into an array of words based on delimiter.
**substr(startIdx[,length])** | returns the characters in a string beginning at the startIdx through the specified number of characters.
**substring(startpos, endpos)** | Returns a subset of string starting at startpos up to, but not including, endpos.
toLocaleLowerCase() | Returns a **copy** of the string converted to lowercase.
toLocaleUpperCase() | Returns a **copy** of the string converted to uppercase.
**toLowerCase()** | Converts all characters in a string to lowercase letters.
toString() | Returns the same string as the source string.
**toUpperCase()** | Converts all characters in a string to uppercase letters.
valueOf | Returns the string value of the object.

  - [JavaScript : String.slice() vs String.substring() vs String.substr() - See more at: http://www.tothenew.com/blog/javascript-slice-vs-substring-vs-substr/#sthash.wsuUQmk4.dpuf](http://www.tothenew.com/blog/javascript-slice-vs-substring-vs-substr/)
    - MDN [substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
    - MDN [substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
    - MDN [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
    - **[Summary of comparation with example]**(https://docs.google.com/spreadsheets/d/1nBhkxBIs7KWecbTa69zBkRd8Q8yptvz9dWLux4LMeNE/edit#gid=0)

#### Number Object
- properties

Property | What It Describes
-------- | --------------------------------------------------------------
MAX_VALUE | The largest representable number, 1.7976931348623157e+308
MIN_VALUE | The smallest representable number, 5e–324
NaN | Not-a-number value
NEGATIVE_INFINITY | Negative infinite value; returned on overflow
POSITIVE_INFINITY | Infinite value; returned on overflow
prototype | Used to customize the Number object by adding new properties and methods

- methods

Method | What It Does
------ | ---------------------------
toString() | Converts a number to a string using a specified base (radix)
toLocaleString() | Converts a number to a string using local number conventions
toFixed() | Converts a number to a string with a specified number of places after the decimal point
toExponential() | Converts a number to a string using exponential notation and a specified number of places after the decimal point
toPrecision() | Converts a number to a string in either exponential or fixed notation containing the specified number of places after the decimal point

#### Boolean Object
The Boolean object was included in JavaScript 1.1. It is used to convert a non-Boolean value to a Boolean value, either true or false. There is **one property**, the **prototype property**, and **one method**, the **toString() method**, which converts a Boolean value to a string; thus, true is converted to “true” and false is converted to “false”.

#### Function Object
- properties

Property | What It Does
-------- | --------------
length | Returns the number of arguments that are expected to be passed (read only).
prototype | Allows the object to be customized by adding new properties and methods.

- methods

Property | What It Does
-------- | --------------------
apply() | Allows you to apply a method from one function to another.
call() | Allows you to call a method from another object.

## BOM
### Hierarchy of the browser object model and document object model.

![Image of BOM hierarchy](BOM-DOM.JPG)

In the browser object model, sometimes called BOM, the window is at the top of the tree, and below it are objects: _**window, navigator, frames[], document, history, location**_, and _**screen**_.

#### navigator object
- The navigator object can be used for platform-specific checking to determine the version of the browser being used, whether Java is enabled, what plug-ins are available, and so on.

- properties of navigator object

Property | What It Describes
-------- | ----------------------------
appCodeName | Code name for the browser.
appName | Name of the browser.
appVersion | Version of the browser.
mimeTypes | An array of MIME types supported by the browser.
platform | The operating system where the browser resides.
userAgent | HTTP user-agent header sent from the browser to the server.
plugins[] | plugin object array, include all plugins installed for the browser.
mimeTypes[] | list of MIME types.

- geolocation object (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)
  - getCurrentPosition()
  - watchPosition()
  - clearWatch() : stop watching the user's location.

- others
  - plug-ins
  
  Plug-ins are special software programs that can be downloaded to add the ability to listen to audio, watch videos and movie clips, display animation, and create special image viewing files. Some examples of plug-ins are Macromedia Shockwave or Flash player, Adobe Acrobat Reader, and RealNetworks RealPlayer. Plugins can be platform dependent and their MIME types can vary as well.
  
  - ActiveX
  
  ActiveX controls are used as a means to embed objects or components into a Web page. Online spreadsheets, security updates, word processors, patches, and timers are examples of such components. You can add ActiveX controls to your Web pages by using the standard HTML <object> tag. The <object> tag takes a set of parameters that specify which data the control should use and defines its appearance and behavior.
  
  - MIME : Multipurpose Internet mail extensions. 
  
  It is a standard format for sending mail messages across the Internet. Now it is used to exchange all kinds of file types across the Internet, such as audio, video, and image files. All browsers have a list of MIME types.
  
#### window object
The window object is where all the action happens in a browser. It’s at the top of the Java-Script hierarchy, and is automatically defined for each window that you open. 

The window object comes with a number of properties and methods. Because it is the basis of all objects, the name of the window object can be excluded when applying methods to it.

- properties
- methods

Method | What It Does
------ | ------------------
open(url, name, [options]) | Opens a new window and returns a new window object. **options**
close() | Closes a window.
alert(text) | Creates a triangular dialog box with a message in it.
prompt(text, defaultInput) | Creates a dialog prompt box to ask for user input.
confirm() | Creates a dialog box for user confirmation.
setInterval(expression, milliseconds) | After a specified interval, evaluates an expression.
setInterval(function, milliseconds, [arguments]) | After a specified interval, evaluates a function.
setTimeout(expression, milliseconds) | After a timeout period has elapsed, evaluates an expression.
setTimeout(function, milliseconds, [arguments]) | After a timeout period has elapsed, evaluates a function.
clearInterval(interval) | Clears a previously set interval timer.
clearTimeOut(timer) | Clears a previously set timeout.   
blur() | Removes focus from the window.
focus() | Gives the focus to a window.
scroll(x, y) | Scrolls to a pixel position in a window.
moveBy() | e.g, moveBy(20,20), Moves the window relatively by 20 pixels.
moveTo() | e.g, moveTo(0,0), Moves to the top, left corner of the screen.
resizeBy() | e.g, resizeBy(15,10), Resizes the window relatively by 15 × 10 pixels.
resizeTo() | e.g, resizeTo(450,350), Resizes the window absolutely to 450 × 350 pixels.

#### frame object
Frames allow you to display more than one Web page in the same window.

When a page is divided into frames, the visitor cannot bookmark the page if the browser is not pointing to the top frameset. The _location object_ can be used to make sure the topmost window is the one currently viewed in the browser.

- Use ```<frameset>``` instead of ```<body>``` tag to build frames in a web page. 
- Use cols and rows attribute to specify how much room the frame will need within the window.
- Example
```html
<html>
<head><title>Frame Me!</title></head>
<!-- Creating the framesets for two files -->
<!-- This file is named: framesets.html -->
  <frameset cols="25%,75%">
  <frame src="leftframe.html" >
  <frame src="rightframe.html" >
  </frameset>
</html>
----------------------------------------------------------------------
<html>
<head><title>Left Frame</title></head>
<!--This file is named: leftframe.html -->
  <body bgColor="yellow">
<h2>
  Just to show you that this is the left frame
</h2>
</body>
</html>
----------------------------------------------------------------------
<html>
<head><title>Right Frame</title></head>
  <!--This file is named: rightframe.html -->
  <body bgColor="lightgreen">
<h2>
Just to show you that this is the right frame
</h2>
</body>
</html>
```

#### location object
The location object is a property of the window object and is used to access the URL of the document currently loaded in the window.
- properties

Property | What It Describes in the URL
-------- | ------------------------------
hash | If it exists, the anchor part.
host | The hostname:port.
hostname | The hostname.
_**href**_ | The entire URL. href puts the new page at the top of the history list.
pathname | The pathname.
port | The port number.
protocol | The protocol and colon.
search | The query string.

- methods

Method | What It Does
------ | -------------
**assign()** | Load and display the document at the URL specified.
**replace()** | Replaces the current page with a new one. cannot go back to the prev page. It removes the current page from the history list and replaces it with the new page.
reload() | Reloads the current URL.
unwatch() | Removes a watch point on the location property.
watch() | Sets a watch point on the location property; that is, calls a function if the property changes.

#### history object
The history object is a property of the window object. It keeps track of the pages (in a stack) that the user has visited. The history object is most commonly used in JavaScript to move back or forward on a page, similar to the back button and forward button supported
by your browser. The history object can reference only those pages that have been visited; that is, those pages on its stack.

- properties

Property | What It Describes in the URL
-------- | -------------------------------
length | The number of entries in the history object.
current | The current document URL.
next | The URL of the next document in the history object.
previous | The URL of the previous document in the history object.
search | The query string.

- methods

Method | What It Does
------ | ----------------
back() | Goes to the previous URL entry in the history list; like the browser’s back button.
forward() | Goes to the next URL entry in the history list; like the browser’s forward button.
go() | The browser will go forward or back (if the value is negative) the number of specified pages in the history object.

#### screen object
The screen object is a property of the window object and is automatically created when a user loads a Web page. It gives you access to the various properties of the user’s screen such as its height, width, color depth, and so on. This can be helpful when designing pages that will require specific dimensions. There are no event handlers for this object.

- properties

Property | What It Describes
-------- | -----------------
height | The pixel height of the screen.
width | The pixel width of the screen.
availHeight | The pixel height of the screen, minus toolbars, and so on.
availWidth | The pixel width of the screen, minus toolbars, and so on.
availLeft | The x coordinate of the first pixel, minus toolbars, and so on.
availTop | The y coordinate of the first pixel, minus toolbars, and so on.
colorDepth | The maximum amount of colors that the screen can display.
pixelDepth | The number of bits per pixel of the screen.

### Working with forms and input devices ([reference](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data))
- Attributes of the ```<form>``` tag
  - action : This attribute defines where the data gets sent. Its value must be a valid URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form. The URL can be relative or absolute.
  ```javascript
  <form action="http://foo.com">       // the data is sent to an absolute URL — http://foo.com
  <form action="/somewhere_else">      // relative URL
  <form>   or <form action="#">        // the form data is sent to the same page that the form is present on
  ```
  
  - method : indicates **how** the form data will be sent to the server. For pure queries which will not affect the state of the server, the **GET** method is normally used, and for submitting form data, the **POST** method is used.
  
    - example of GET method:
    ```html
    <form action="http://foo.com" method="get">
      <div>
        <label for="say">What greeting do you want to say?</label>
        <input name="say" id="say" value="Hi">
      </div>
      <div>
        <label for="to">Who do you want to say it to?</label>
        <input name="to" value="Mom">
      </div>
      <div>
        <button>Send my greetings</button>
      </div>
    </form>
    ```
    you'll see the URL ```www.foo.com/?say=Hi&to=Mom``` appear in the browser address bar when you submit the form. The data is appended to the URL as a series of **name/value pairs** and the browser sends an empty body to server. The HTTP request looks like this:
    ```
    GET /?say=Hi&to=Mom HTTP/1.1
    Host: foo.com
    ```

    - example of POST method:
    ```html
    <form action="http://foo.com" method="post">
      <div>
        <label for="say">What greeting do you want to say?</label>
        <input name="say" id="say" value="Hi">
      </div>
      <div>
        <label for="to">Who do you want to say it to?</label>
        <input name="to" value="Mom">
      </div>
      <div>
        <button>Send my greetings</button>
      </div>
    </form>
    ```
    When the form is submitted using the POST method, you get no data appended to the URL, and the HTTP request looks like so, with the data included in the request body instead:
    ```
    POST / HTTP/1.1
    Host: foo.com
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 13

    say=Hi&to=Mom
    ```
    The Content-Length header indicates the size of the body, and the Content-Type header indicates the type of resource sent to the server.
    
    - If you need to send a _**password**_ (or any other sensitive piece of data), **never use the GET method** or you risk displaying it in the URL bar, which would be very insecure.
    - If you need to send a _**large amount of data**_, the **POST** method is preferred because some browsers limit the sizes of URLs. In addition, many servers limit the length of URLs they accept.
  
  - name : is used by server to extract the values associated with it. If form data will be used in a server script (such as PHP ASP.NET, or CGI), the _name_ attribute is **required**. _Name_ attributes do not have to be unique.
  
  - value : after click submit button, the _name/value_ paires from the form are collected by the browser and sent to the server-side program. If the method attribute is GET, the name/value pairs will be assigned to a query string and if the method attribute is assigned POST, the pars will be sent in an HTTP message body.
  
  - id : used by javascript to identify a element. The _id_ attribute values are not sent to the server.
  
- the _document.forms[]_ array

  The forms can be accessed in two ways: by name or by number(index).
  - If you name the form with the _name_ attribute of the HTML ```<form>``` tag, you can use that name to reference the _forms_ object. for example:
  ```javascript
  <form name = 'myform1'>...</form>
  
  var myform = document.forms['myform1'];  will return the form object.
  ```
  - the index value of the array, starting at 0, corresponds to the order in which the form occurs in the document. For example,  _document.forms[0]_ is the first form to appear in the page.
  
- the elements[] array

  The javascript _form_ object consists of a property called elements. This is a JavaScript array that parallels all of the HTML fields within the form. Each of the input types in the elements[] array is also an object in its own right.
  
  _**Different ways to access form elements**_:
  ```javascript
  document.forms[i].elements[j]
  document.forms["form_name"].elements["ele_name"]
  document.form_name.ele_name
  document["form_name"]["ele_name"]
  
  // example:
  <form name="form1" id=”first_form”>
    Enter your name:
    <input type="text"
      id="namefield"
      name="namefield"
      value="Name: " />
  </form>
  <form name="form2" id="second_form">
    <input type="button" value="Press here">
  </form>
  <form name="myform">
    <input type="button" name="button1" id="button1" value="red" />
    <input type="button" name="button2" id="button2" value="blue" />
  </form>  
  <script>
    console.log(document.myform.button1.value);  // red
    console.log(document.form1.name);            // form1
    console.log(document["myform"]["button2"].type); // button
  </script>
  ```
  
- Different ways to submit fillout forms ([reference](http://www.javascript-coder.com/javascript-form/javascript-form-submit.phtml))
  - use _submit_ input type
  - use _image_ input type
  
    Input | Type | Attribute Description
    ----- | ---- | ----------------------
    submit | name, id, value | When clicked, executes the form; launches cgi.
    image | src, name, id, value, align | Same as submit button, but displays an image instead of text. The image is in a file found at src.
    
  - with Javascript (event handlers), see below.

- use _**button**_ input type if the form is **not** going to submit data to a server.
  ```html
  <html>
  <head><title>button input type</title>
  <script type="text/javascript">
    function greetme(){
      alert("Why did you click me like that? ");
    }
  </script>
  </head>
  <body>
    <form name="form1">
    <!-- event handler for a button is an attribute for its input type -->
    <input type="button" value="Click me!" onClick="greetme()" />     ****************
    </form>
  </body>
  </html>
  ```

- Three important form event handlers
  - onClick
  
  The onClick event handler is an attribute of the HTML _**submit**_ or _**button**_ _input type_. When the user clicks the button, the event is triggered, and _if the handler function returns true, the form will be submitted; otherwise, it will be rejected_.
  ```html
  <html>
    <head><title>onClick Event Handler and Forms</title>
    <script type="text/javascript">
      function readySubmit(){
        if(confirm("Are you ready to submit your form? ")){
          return true;
        }
        else{
          return false;
        }
      }
    </script>
    </head>
    
    <body>
      <form action="http://cgi-bin/testform.cgi" method="post">
        Enter your user id:
        <input type="text" name="textbox" value="" />
        <br />
        Type your password:
        <input type="password" name="secret" />
        <p></p>
        <input type="submit" onClick="readySubmit();" />       ************************
      </form>
    </body>
  </html>
  ```

  - onSubmit
  
  The onSubmit event handler is added as an attribute of the ```<form>``` tag (and _**only the ```<form>``` tag**_), to control what happens when the user clicks the submit button.
  
  When a function is assigned to the onSubmit event handler, if the value returned by the function is true, the form will be submitted to the server, but if it returns false, the form will be stopped and the user will be given a chance to reenter data in the form.
  ```html
  <html>
    <head><title>onSubmit Event Handler and Forms</title>
      <script type="test/JavaScript">
        function readySubmit(){
          if(confirm("Are you ready to submit your form? ")){
            return true;
          }
          else{
            return false;
          }
        }
      </script>
    </head>
    <body>
      <form action="cgi-bin/testform.cgi" method="post" onSubmit="return(readySubmit());" >   *****************
        Enter your user id:
        <input type="text" name="textbox" value="" />
        <br />
        Type your password: <input type="password" name="secret" />
        <br />
        <input type="submit" />
      </form>
    </body>
  </html>
  ```
  
  - onReset
  
  It's an attribute of the ```<form>``` tag. This event handler can be used to make sure that clearing an entire form is really what you want to do, when you click on the _reset_ button (the HTML reset button allows the user to clear the form fields and set them back to their default values).
  ```html
  <html>
  <head><title>The onReset Event</title>
    <script type="text/javascript">
      function resetAll(){
        if(confirm("Do you want to reset the form to its default " + " values? ")){
          return true;
        }
        else{
          return false;
        }
      }
    </script>
  </head>

  <body>
    <form action="http://cgi-bin/testform.cgi" method="post" onReset="return resetAll();">        *************
    Enter your user id: <input type="text" name="textbox" value="Name?" id="textbox">
    <p>Type your password: <input type="password" name="secret" id="secret"></p>
    <p>
      <input type="submit"/>
      <input type="reset" value="Reset Form"/>
    </p>
    </form>
  </body>
  </html>
  ```
  
- the _this_ keyword

  When using an event handler, the this keyword always refers to the object that triggered the event. 
  - If the event is triggered from within the <form> tag, this refers to the current form, 
  - but if it is triggered by an element within the form, such as an input device, then it references that element. 
  - Each element has a _**form property**_ that references the form in which it was created.
  ```html
  <form>                                 <-- The JavaScript form object
    <input type="button"                 <-- This a JavaScript element
    value="Print Form Stuff"
    onClick="display_formval(this.form);"> <-- this keyword references the form object by using the element’s form property
    <input type="button"
    value="Print Button Stuff"
    onClick="display_buttonval(this);">  <-- this keyword references the current object, the button
  </form>
  ```
  
- submit() and reset() methods
  
  These methods emulate the event handlers of the same name: The submit() method submits the form just as though the user had clicked the submit button, and the reset() method resets the form elements to their defaults just as if the user had clicked the reset button.
  

## AJAX
#### The steps for creating AJAX communication
```javascript
1. ajaxRequest = new XMLHttpRequest();
2. // use GET
   ajaxRequest.open("GET", url, true/false);     // true: async, false: sync
   ajaxRequest.send(null);
   
   // use POST
   ajaxRequest.open("POST", url, true/false);    // true: async, false: sync
   ajaxRequest.setRequestHeader("Content-type", ".....");
   ajaxRequest.send(query string);    // query string example: "firstname=John&lastname=Doe"
   
3. // monitoring state of server response
   ajaxRequest.onreadystatechange = function() {
     if (ajaxRequest.status == 200 && ajaxRequest.readyState == 4) {
       // data received completely, do something.
     }
   }
```

#### Example code
```javascript
  // Step1 : 
  /* Check browser type and create ajax request object
     Put this function in an external .js file and use it for your
     Ajax programs 
  */
  function CreateRequestObject(){
    var ajaxRequest; // The variable that makes Ajax possible!
    try{
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest(); // Create the object
    }
    catch (e){
      // Internet Explorer Browsers
      try{
        ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try{
          ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e){
          return false;
        }
      }
    }
    return ajaxRequest;
  } //End function
  
  // Step 2: retrieve text from a file
  function getText(url){
    var ajaxRequest=createRequest(); /* Cross-browser check; Get a new XMLHttpRequest object */
    if( ajaxRequest != false){ /* If we got back a request object create callback function to check state of the request*/
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
        document.getElementById('data').innerHTML=
        ajaxRequest.responseText;
      }
      else {
        alert('There was a problem with the request.');
      }
    } // End callback function
  
  // Initialize the object
  ajaxRequest.open('GET', url, true); 
  // Deal with the cache
  ajaxRequest.setRequestHeader('If-Modified-Since', 'Sat, 03 Jan 2010 00:00:00GMT');
  ajaxRequest.send(null); // Send the request
}  // End getText() function
```

# ES6
## String Methods

  method | Syntax | example
  ------ | ------ | --------------
  [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) | str.includes(searchString[, position]) <br> case-sensitive <br> return true or false <br> start searching from position, default is 0 | var str = 'To be, or not to be, that is the question.'; <br> console.log(str.includes('To be', 1)); // false <br> console.log(str.includes('TO BE')); // false
  [startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) | str.startsWith(searchString[, position]) <br> case-sensitive <br> return true or false <br> start searching from position, default is 0 | var str = 'To be, or not to be, that is the question.'; <br> console.log(str.startsWith('not to be')); // false <br> console.log(str.startsWith('not to be', 10)); // true
  [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) | str.endsWith(searchString[, length]) <br> case-sensitive <br> return true or false <br> end searching till length, default is str.length | var str = 'To be, or not to be, that is the question.'; <br> console.log(str.endsWith('to be', 19)); // true, search length is 19 instead of str.length
  [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) | let resultString = str.repeat(count) <br> return a new string contains count number copies of str | 'abc'.repeat(0); // '' <br> 'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
  
  
## String Template literals
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are string literals allowing embedded expressions.
- Template literals are enclosed by the back-tick (` `)
  ```
  `string text ${expression} string text`
  ```
- You can use multi-line strings and string interpolation features with them.
  ```
  console.log(`string text line 1
  string text line 2`);
  // "string text line 1
  // string text line 2"
  ```
  
- Expression interpolation
  ```
  var a = 5;
  var b = 10;
  console.log(`Fifteen is ${a + b} and
  not ${2 * a + b}.`);
  // "Fifteen is 15 and
  // not 20."
  ```
  
- Tagged template literals

  Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. The name of the function used for the tag can be named whatever you want.
  ```
  var person = 'Mike';
  var age = 28;

  function myTag(strings, personExp, ageExp) {

    var str0 = strings[0]; // "that "
    var str1 = strings[1]; // " is a "

    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];

    var ageStr;
    if (ageExp > 99){
      ageStr = 'centenarian';
    } else {
      ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;

  }

  var output = myTag`that ${ person } is a ${ age }`;

  console.log(output);
  // that Mike is a youngster  
  ```
  
- Raw strings
  
  The special raw property, available on the first function argument of tagged template literals, allows you to access the raw strings as they were entered, without processing escape sequences.
  ```
  function tag(strings, ...values) {
    console.log(strings.raw[0]);
  }

  tag`string text line 1 \n string text line 2`;
  // logs "string text line 1 \n string text line 2" ,
  // including the two characters '\' and 'n'  
  ```
  
## Block bindings: let, const
### [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

- let allows you to declare variables that are _**limited in scope to the block, statement, or expression**_ on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

### [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

- Constants are block-scoped, much like variables defined using the _let_ statement. 
- The value of a constant cannot change through re-assignment, and it can't be redeclared.

### var vs. const vs. let
#### var vs. let
- let has block scope, var has function scope
  ```
  for(var i = 1; i <= 5; i++) {               |      for(let i = 1; i <= 5; i++) {  
     setTimeout(function() {                  |         setTimeout(function() {
         console.log('Value of i : ' + i);    |             console.log('Value of i : ' + i);
     },100);                                  |        },100); 
  }                                           |      }
                                              |      
  output:                                     |      output:
  Value of i : 6                              |      Value of i : 1
  Value of i : 6                              |      Value of i : 2 
  Value of i : 6                              |      Value of i : 3
  Value of i : 6                              |      Value of i : 4 
  Value of i : 6                              |      Value of i : 5
  ```
- var gets hoisted, let does not.

#### let vs. const
- const means that the identifier can’t be reassigned and redeclared. let can.
- const and let are all local variable, they can not be global variable.
  ```
  let hello = 'hello';
  const hi = 'hi';
  console.log(hello);   // 'hello'
  console.log(window.hello);  // undefined
  console.log(window.hi === hi);  // false
  
  var you = 'John';
  console.log(window.you === you);  // true
  ```

# Recommended Reference
- http://javascriptissexy.com/how-to-learn-javascript-properly/
- http://eloquentjavascript.net/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

- [Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
