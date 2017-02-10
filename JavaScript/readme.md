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
### Functions
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

- Factory Functions vs Constructor Functions vs Classes
  - [JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e#.893p2krj8)
   
- Event Loop
  - [MDN Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
  - [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
