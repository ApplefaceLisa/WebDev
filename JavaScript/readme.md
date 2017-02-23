# About learning JavaScript

# Book
#### [You Don't Know JS series](https://github.com/getify/You-Dont-Know-JS)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)
  
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
  
- [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar)
  
- [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance)
  
- [You Don't Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)


# Articles
- [3 JavaScript questions to watch out for during coding interviews](https://medium.freecodecamp.com/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb#.mfc6xdg3d)

  - Question #1: Event delegation
  - Question #2: Using a closure within a loop
  - Question #3: Debouncing
  
- [JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
    
# Basic Knowledge
### Variable scope and hoisting
- [Demystifying JavaScript Variable Scope and Hoisting](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
- scope problem of setInterval() / setTimeout()
  - [Referencing “this” inside setInterval/setTimeout within object prototype methods
](http://stackoverflow.com/questions/7890685/referencing-this-inside-setinterval-settimeout-within-object-prototype-methods)

### Functions
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
  
    func.call(thisObj[, arg1[, arg2[, ...]]])
    
    return the result of calling the function with the specified _this_ value and arguments.
    
    
  - [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  
    The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
  
    func.apply(thisObj[, arg_arr])
    
    **the arguments are passed to the function are specified as an array** : arg_arr = [arg1[, arg2[, ...]]].
    
    return the result of calling the function with the specified _this_ value and arguments.
    
  - [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  
    func.bind(thisObj[, arg1[, arg2[, ...]]])
    
    return a copy of the given function with the specified _this_ value and initial arguments.
    
    The bind() function creates a **new bound function (BF)**. It creates a new function instance whose _this_ value is bound to the value that was passed into bind().
  
  - compare
  
    Use **.bind()** when you want that function to **later be called** with a certain context, useful in events. Use **.call() or .apply()** when you want to invoke the funciton **immediately**, and modify the context.

    Call/apply call the function immediately, whereas bind returns a function that when later executed will have the correct context set for calling the original function. This way you can maintain context in async callbacks, and events.
  
    for [example](http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
    ```
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

  a closure is simply an outer function that returns an inner function. Doing this creates a mechanism to return an enclosed scope on demand.
  
  Closures have access to the outer function’s variable even after the outer function returns.
  
  Closures store references to the outer function’s variables; they do not store the actual value.

- use function to implement module
  ```
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
  
- What are the advantages of IIFEs(Immediately Invoked Functon Expressions)?
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
      for (var i = 0; i &lt; fruits.length; i++) {
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
      for (var i = 0; i &lt; fruits.length; i++) {
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

### Objects
- [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)

- [object literal notation vs constructor](http://stackoverflow.com/questions/4859800/should-i-be-using-object-literals-or-constructor-functions)
  - If you **don't have behaviour** associated with an object (i.e. if the object is just a container for data/state), use an object literal. Furthermore, Object literals are basically singletons with variables/methods that are all public.
  ```
  var data = {
      foo: 42,
      bar: 43
  };
  data.foo = 12;
  data.bar = 99;
  ```
  - Object defined with a constructor lets you have multiple instances of that object. If you want to use **(semi-)private variables or functions** in you object, a constructor function is the way to do it.
  ```
  function MyData(foo, bar) {
      var _foo = foo;   // private
      this.bar = bar;   // public

      this.verify = function () {
          return _foo === this.bar;   // _foo doesn't need this
      };
  }
  ```
  - Prototype lets you attach each function once and only once: they'll be inherited by the instances through prototypal inheritance.
  ```
  MyData.prototype.verify = function () {
      return this.foo === this.bar;
  };
  ```
  
- Basic class, subclass and inheritance
  - MDN [Details of the object model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
  
- Quora [Object vs Class vs Function](http://stackoverflow.com/questions/17525450/object-vs-class-vs-function)
  - prototypal pattern vs. constructor pattern

- Quora [Benefits of prototypal inheritance over classical?](http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
  - Quora [Understanding the difference between Object.create() and new SomeFunction()](http://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction)
  - [Why Prototypal Inheritance Matters](http://aaditmshah.github.io/why-prototypal-inheritance-matters/#constructors_vs_prototypes)

# Recommended Reference
- http://javascriptissexy.com/how-to-learn-javascript-properly/
- http://eloquentjavascript.net/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
