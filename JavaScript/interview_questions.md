1. [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  
2. [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)  
2.1 Different ways to create objects and the resulting prototype chain
3. [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)
4. [Master the JavaScript Interview: Soft Skills](https://medium.com/javascript-scene/master-the-javascript-interview-soft-skills-a8a5fb02c466)
5. [The Best Way to Learn to Code is to Code: Learn App Architecture by Building Apps](https://medium.com/javascript-scene/the-best-way-to-learn-to-code-is-to-code-learn-app-architecture-by-building-apps-7ec029db6e00)
----------------------------------------------------------------------------------------------------------------------------------------
1. What is JavaScript?  
  JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object Oriented Programming language.
  
2. Enumerate the differences between Java and JavaScript?  
  Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent.  
  Java is an object – oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language and it is said to be unstructured programming.
  
3. What are JavaScript Data Types?  
  - Six data types that are primitives:
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol (new in ECMAScript 6)
  - and Object
  
4. What is the use of isNaN function?  
  We should differ the global isNaN() function and Number.isNaN() method. The isNaN() function determines whether a value is an illegal number (Not-a-Number). The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
  - _**isNaN()**_ function returns true if the argument is not a number otherwise it is false. The global isNaN() function, converts the tested value to a Number, then tests it. example:
  ```
    isNaN(123) //false             isNaN(-1.23) //false             isNaN(5-2) //false
    isNaN(0) //false               isNaN('123') //false             isNaN('Hello') //true
    isNaN('2005/12/12') //true     isNaN('') //false                isNaN(true) //false
    isNaN(undefined) //true        isNaN('NaN') //true              isNaN(NaN) //true
    isNaN(0 / 0) //true
  ```  
  - _**Number.isNaN()**_ returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false. It does not convert the values to a Number, and will not return true for any value that is not of the type Number. example:
  ```
    Number.isNaN(123) //false             Number.isNaN(-1.23) //false      Number.isNaN(5-2) //false
    Number.isNaN(0) //false               Number.isNaN('123') //false      Number.isNaN('Hello') //false
    Number.isNaN('2005/12/12') //false    Number.isNaN('') //false         Number.isNaN(true) //false
    Number.isNaN(undefined) //false       Number.isNaN('NaN') //false      Number.isNaN(NaN) //true
    Number.isNaN(0 / 0) //true
  ```
  
5. What is negative infinity?  
  Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.
  
6. What are undeclared and undefined variables?  
  - Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

  - Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.  
  
7. Write the code for adding new elements dynamically?  
  ```
    <html> 
    <head> 
      <title>t1</title> 
    </head> 
    <body> 
      <p id="firstP">firstP<p> 
    </body> 
    <script type="text/javascript"> 
      function addNode() { 
        var newP = document.createElement("p"); 
        var textNode = document.createTextNode(" This is a new text node"); 
        newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); 
      } 
    </script> 
    </html>
  ```

8. _this_ keyword  
  In JavaScript, the thing called _**this**_, is the object that "owns" the JavaScript code.  
- The value of this, when used in a function, is the object that "owns" the function.  
- The value of this, when used in an object, is the object itself.  
- The this keyword in an object constructor does not have a value. It is only a substitute for the new object.  
- The value of this will become the new object when the constructor is used to create an object.
   
9. [What Does JavaScript Void(0) Mean?](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)  
  The JavaScript _**[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)**_ operator evaluates the given expression and then returns a value of _undefined_.    
  
  - JavaScript void is often used when, inserting an expression into a web page may produce an unwanted side-effect. By using `JavaScript:Void(0)`, you can eliminate the unwanted side-effect, because it will return the undefined primative value. A common usage of `JavaScript:Void(0)` is with hyperlinks to prevent the page from refreshing. For example:
  ```
    <a href="JavaScript:void(0);" ondblclick="alert('Well done!')">Double Click Me!</a>
  ```
  
  - `JavaScript:Void(0)` Alternatives :
    - `event.preventDefault()` : for example
    ```
      <a href="https://www.quackit.com" 
         onclick="event.preventDefault();" 
         ondblclick="alert('Well done!')">Double Click Me!</a>
    ```
    - `return false` : for example
    ```
      <a href="https://www.quackit.com" 
         onclick="return false;" 
         ondblclick="alert('Well done!')">Double Click Me!</a>
    ```
  - [What does “javascript:void(0)” mean?](https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean)
    - The void operator evaluates the given expression and then returns undefined.

    - The void operator is often used merely to obtain the undefined primitive value, usually using “void(0)” (which is equivalent to “void 0”). In these cases, the global variable undefined can be used instead (assuming it has not been assigned to a non-default value).
10. how to read a file using JavaScript?  
  
11. Cookie
- [What Are Cookies?](http://www.whatarecookies.com/)
- [What are Cookies and What Do Cookies Do?](https://www.webopedia.com/DidYouKnow/Internet/all_about_cookies.asp)
- [JS cookies](https://www.w3schools.com/js/js_cookies.asp)

12. what is promise?   [ref](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)  
  A promise is an object which can be returned synchronously from an asynchronous function, that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved. A promise may be in one of 3 possible states: _**fulfilled**_, _**rejected**_, or _**pending**_(not yet fulfilled or rejected). Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.  
  A promise is _**settled**_ if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.  
  Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.

13. event handling   [ref](https://javascript.info/bubbling-and-capturing)    [ref](https://www.bitovi.com/blog/a-crash-course-in-how-dom-events-work)
14. [What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
15. [what's a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
16. [what's a pure function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
17. [What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
18. [What is Function Composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)
19. MVC, MVP, MVVM design patterns  
  [difference](https://www.quora.com/What-are-the-main-differences-between-MVC-MVP-and-MVVM-design-patterns-for-the-JavaScript-developer)  
  [explore](https://www.infoworld.com/article/2926003/microsoft-net/exploring-the-mvc-mvp-and-mvvm-design-patterns.html)
20. [Mixins](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c)  _**[ref](https://javascript.info/mixins)**_  
  a mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.  
  In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.  
  ```
  // mixin
  let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };

  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }

  // copy the methods
  Object.assign(User.prototype, sayHiMixin);

  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!  
  ```
  Mixins can make use of inheritance inside themselves. i.e. mixin can inherit another mixin.
  ```
  let sayMixin = {
    say(phrase) {
      alert(phrase);
    }
  };

  let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.create to set the prototype here)

    sayHi() {
      // call parent method
      super.say(`Hello ${this.name}`);
    },
    sayBye() {
      super.say(`Bye ${this.name}`);
    }
  };

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  // copy the methods
  Object.assign(User.prototype, sayHiMixin);

  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!  
  ```  
  _**Note**_ that the call to the parent method super.say() from sayHiMixin looks for the method in the prototype of that mixin, not the class.
  
21. Javascript gargage collection and memory leak
- [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)
------------------------------------------------------------------------------------------------------------------------------------
A. How do you think about our webpage? suggestions?
B. Describe a typical work day

- [Top 85 JavaScript Interview Questions & Answers](https://career.guru99.com/top-85-javascript-interview-questions/)
- [front-end-Interview-Questions](https://github.com/khan4019/front-end-Interview-Questions)  
