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
   
9. what does viod(0) do?
10. how to read a file using JavaScript
11. what is cookies?

- [Top 85 JavaScript Interview Questions & Answers](https://career.guru99.com/top-85-javascript-interview-questions/)
  
